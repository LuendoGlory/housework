import React, { useState, useContext} from 'react';
import {FirebaseContext } from '../Firebase';
import Adress from '../Adress'
import { v4 as uuidv4 } from 'uuid';

const ClientsPhysique = () => {

    const clients ={
        nom: "",
        prenom: "",
        carteIdentite: "",
        dateNaissance: "",
        profession: ""
    }

const [inputClients, setInputClients]= useState(clients);
const firebase = useContext(FirebaseContext);
const [unikId, setUnikId] = useState(uuidv4())
const [track, setTrack] = useState(false)


const handleChange= (e)=>{
    setInputClients({...inputClients, [e.target.id]: e.target.value});
}

const handleSubmit =(e)=>{
  e.preventDefault();

  const { nom, prenom, carteIdentite, dateNaissance, profession} = inputClients;
return(
     firebase.db.collection('clientsPysique').doc(unikId).set({
    uuid:unikId,
     nom:nom,
      prenom:prenom,
       carteIdentite:carteIdentite,
        dateNaissance:dateNaissance,
         profession: profession,
         adresse: "" 
       
    }).then(resultat=>{
        setTrack(!track)
        setInputClients({...clients})

    }).catch(error=>console.log(error.message)
   
    )
  
 )
}


 

    return (

        <>
        {!track && 
        <div className="signUpLoginBox">
            <div className="slContainer">

                   <div className="formAdd">

                    <form onSubmit={handleSubmit} >
                            <h5><strong>ENREGISTRER LES CLIENTS PHYSIQUES</strong></h5>

                            <div className="inputBox">
                                <label htmlFor="prenom">Nom</label>
                                <input onChange={handleChange} type="text" id="nom" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Prenom</label>
                                <input onChange={handleChange} type="text" id="prenom" required  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Numero de carte d'identite</label>
                                <input onChange={handleChange} type="text"  id="carteIdentite"  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Date de naissance</label>
                                <input onChange={handleChange} type="date" id="dateNaissance"  />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="profession">Profession</label>
                                <input onChange={handleChange} type="text"  id="profession" required autoComplete="off" />
                            </div>
                            
                            <button type='submit'>Enregistrer</button>
                        </form>
                   </div>

               </div>
            </div>
     }
            
    {track && <Adress id={unikId} champ="clientsPysique" />}

 </>

 )
};

export default ClientsPhysique;