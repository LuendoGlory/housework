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
const [isUpdate,setIsUpdate]=useState("")
console.log("this is the id and service",id,service)
useEffect(() => {
    setCurrentUser(firebase.auth.currentUser)
}, [id])
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

     
         firebase.db.collection('Commandes').doc(`${unikId}`).set({
            uuid:unikId,
         dateCommade:dateCommade,
            dateArriver:dateArriver,
           exigences:exigences,
            idUser:currentUser.uid,
           idEmployeMenage:id,
         adresse:""
        }).then(doc => {

   
          }).catch(err => console.log("error acure ",err))
         
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

                            <div className="blocChoise">

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>






                            
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text"> Vos exigences</label>
                                <textarea onChange={handleChange}  type="textarea"  id="exigences" placeholder="La description du profil de personnel de menage">
                                    
                                </textarea>
                            </div>

                            <p>Veillez verrifier vos informations avant de confirmer votre demande d'employer de menage chez Housework</p>

                            <button type='submit' > Confirmer </button>
                            <button onClick={()=>{

                                setTrack(true)

                            }} > changer votre adresse </button>
                        </form>
                   </div>

               </div>
            </div>}
            {track && <Adress id={unikId} champ="Commandes" isUpdate={currentUser.uid}/>}


          
            {/* -- modal pop up  */}
            <ModalConfirm showModal={openModal} closeModal={closeModal}/>
                
        </>
    );
}
export default Commandes;