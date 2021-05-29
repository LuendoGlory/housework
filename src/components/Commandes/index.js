import React, {useState,useEffect, useContext} from 'react';
import {FirebaseContext } from '../Firebase';
import Adress from '../Adress'
import ModalConfirm from '../ModalConfirm'
import { v4 as uuidv4 } from 'uuid';

const Commandes = (props) => {

const [openModal, setOpenModal] = useState(false)

const {id,service}=props.match.params
const [currentUser, setCurrentUser] = useState()
const [idAdress, setIdAdress] = useState("")
const [track, setTrack] = useState(false)
const [unikId, setUnikId] = useState(uuidv4())
console.log("this is the id and service",id,service)
useEffect(() => {
    setCurrentUser(firebase.auth.currentUser)
}, [id])
currentUser && console.log(currentUser)
// currenteUser.uid
const dataCommandes={
    dateCommade: "",
    dateArriver: "",
    exigences: "",
    idUser: "",
    idAdresse: "",
    idEmployeMenage: ""
}
    const [commande, setCommande] = useState(dataCommandes);
    const firebase = useContext(FirebaseContext);

    const handleChange=(e)=>{

        setCommande({...commande, [e.target.id]: e.target.value });
    }
    

    const handleSubmit =(e)=>{
        
        e.preventDefault();
        const {  
             dateCommade,
        dateArriver,
        exigences,
       }=commande

       firebase.db.collection("Commandes").where("idUser", "==", currentUser.uid)
       .get()
       .then((querySnapshot) => {
           querySnapshot.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
               
           });
       })
       .catch((error) => {
           console.log("Error getting documents: ", error);
       });

     
        // firebase.db.collection('Commandes').doc(`${unikId}`).set({
        //     uuid:unikId,
        //     dateCommade:dateCommade,
        //     dateArriver:dateArriver,
        //     exigences:exigences,
        //     idUser:currentUser.uid,
        //     idEmployeMenage:id,
        //     adresse:""
        // }).then(doc => {

        //     setTrack(true)
        //     console.log("this is the doc qnd id",doc)
        //   }).catch(err => console.log("error acure ",err))
         
       }


      const closeModal= ()=>{
        setOpenModal(false);
      }
    
    return (
        <>
        {!track && <div className="signUpLoginBox">
            <div className="slContainer">
                   <div className="formSignup">

                    <form onSubmit={handleSubmit}>
                            <h2><strong> PASSER VOTRE DEMANDE </strong></h2>

                            <div className="inputBox">
                                <label htmlFor="date">Date de demande</label>
                                <input onChange={handleChange} type="date" id="dateCommade" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="dateArriver">A quelle date tu veux votre employé de menage </label>
                                <input onChange={handleChange} type="date" id="dateArriver" required  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text"> Vos exigences</label>
                                <textarea onChange={handleChange}  type="textarea"  id="exigences" placeholder="La description du profil de personnel de menage">
                                    
                                </textarea>
                            </div>

                            <p>Veillez verrifier vos informations avant de confirmer votre demande d'employer de menage chez Housework</p>

                            <button type='submit' > Confirmer </button>
                            <button onClick={()=>setOpenModal(!openModal)} > changer votre adresse </button>
                        </form>
                   </div>

               </div>
            </div>}
            {track && <Adress id={unikId} champ="Commandes"/>}


          


            <ModalConfirm showModal={openModal} closeModal={closeModal}/>
                
        </>
    );
}
export default Commandes;