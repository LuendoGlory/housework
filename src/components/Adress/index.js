import React,{ useState, useContext } from 'react';
import {FirebaseContext } from '../Firebase';

const Adress = ({id,champ}) => {
    console.log("this is id and champ",id,champ)
const adressDatas = {
    commune: "",
    zone: "",
    quartier: "",
    avenue: "",
    numero: "",
    telephone: ""
}

const [datas, setDatas] = useState(adressDatas)
const firebase = useContext(FirebaseContext)

const handleChange=(e)=>{
    setDatas({...datas, [e.target.id]: e.target.value });

}

const handleSubmit = (e)=>{
e.preventDefault();
const {  commune,
    zone,
    quartier,
    avenue,
    numero,
    telephone
}=datas
firebase.db.collection('adresse').add({
    commune:commune , 
    zone:zone,     
    quartier:quartier, 
    avenue:avenue,   
    numero:numero,   
    telephone:telephone

       
   }).then(doc => {

     firebase.db.collection(`${champ}`).doc(`${id}`).update({
        adresse:doc.id
     }).then(doc => console.log("document erregistre",doc)).catch(err => console.log("error acure collection ",err))
   }).catch(err => console.log("error acure ",err))
  
}



const { commune, zone, quartier, avenue, numero, telephone } = datas
    return (
        <div className="formAdd">

             <form onSubmit={handleSubmit}>
                    <h5><strong>ADRESS DE L'EMPLOYE DE MENAGE</strong></h5>

                     <div className="inputBox">
                                <label htmlFor="commune">Commune</label>
                                <input onChange={handleChange}   type="text" id="commune" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="zone">Zone</label>
                                <input onChange={handleChange}   type="text" id="zone" required  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Quartier</label>
                                <input onChange={handleChange}   type="tel"  id="quartier"  />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="text">Avenue</label>
                                <input onChange={handleChange}    type="text"  id="avenue"  />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="text">Numéro</label>
                                <input onChange={handleChange}   type="text"  id="numero"  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Télphone</label>
                                <input onChange={handleChange}    type="tel" id="telephone" />
                            </div>

                            <button type='submit'>Enregistrer</button>
                        </form>
        </div>
    );
};

export default Adress;