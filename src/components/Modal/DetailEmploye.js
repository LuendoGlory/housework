import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'

const DetailsMenage = ({ employe, close, setClose }) => {
    console.log("this is employe DetailsEmploye 5",employe);
  const{uuid,nom,prenom,genre,salaire,typeService,adresse}=employe

 //  const theOne = { ...detail }
 const firebase = useContext(FirebaseContext)
 const [user, setUser] = useState(null)
 const [employeGot, setEmployeGot] = useState(null)
 const [adresseGot, setAdresseGot] = useState(null)
 const [open, setOpen] = useState(true)


useEffect(()=>{
   const fetchThem=()=>{
       firebase.db.collection("employesMenages").doc(uuid).get().then(doc=>{
           console.log("this is employe from Details ",doc.data());
           setEmployeGot(doc.data())
           firebase.db.collection("adresse").doc(`${doc.data().adresse}`).get().then(doc=>{
               console.log("this adresse from 19 ",doc.data());
               setAdresseGot(doc.data())
           })
           
       })
   }
   fetchThem()
},[employe])
 return (
  <div className="modalBackground1" style={{display:open?"block":"none"}}>
   <div className="modalContainer1">
    <h1>DETAILS DE L'EMPLOYE DE MENAGE</h1>
      <p> nom: { employeGot && employeGot.nom} </p>
      <p>prenom: { employeGot && employeGot.prenom} </p>   
      <p>genre: { employeGot && employeGot.genre} </p>   
      <p>salaire: { employeGot && employeGot.salaire} </p>   
       <p>service: { employeGot && employeGot.typeService}  </p> 
       <p>telephone: { adresseGot && adresseGot.telephone}  </p> 
       <p>adresse :
      { adresseGot && adresseGot.zone} ,
      { adresseGot && adresseGot.quartier} ,
      { adresseGot && adresseGot.avenue} ,
      { adresseGot && adresseGot.numero}
      </p>
    

    <button
     onClick={()=>setOpen(false)}
     
    >
     Fermer
    </button>
   </div>
  </div>
 )
}

export default DetailsMenage
