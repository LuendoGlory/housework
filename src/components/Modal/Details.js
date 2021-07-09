import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'

const Details = ({ detail, close, setClose }) => {
 console.log('the detail out here Detail line 4', detail)

 //  const theOne = { ...detail }
 const firebase = useContext(FirebaseContext)
 const { exigences, date, dateArriver, fraisComission,idEmployeMenage } = detail
 const [user, setUser] = useState(null)
 const [employeGot, setEmployeGot] = useState(null)
 const [adresseGot, setAdresseGot] = useState(null)
 const [open, setOpen] = useState(true)
 
 useEffect(() => {
  const fetchThem = () => {
   const { idUser, idClient_sur_place} = detail
   console.log(
    'choosen one idUser and idClient_sur_place',
    idUser,
    idClient_sur_place
   )
   idUser &&
    firebase.db
     .collection('users')
     .doc(`${idUser}`)
     .get()
     .then(doc => {
      console.log('userFound normal client Detail 23', doc.data())
      setUser(doc.data())
      firebase.db
       .collection('adresse')
       .doc(`${doc.data().adresse}`)
       .get()
       .then(doc => {
        console.log('adresse  client Detail 27', doc.data())
        setAdresseGot(doc.data())
       })
     })
   idClient_sur_place &&
    firebase.db
     .collection('clientsPysique')
     .doc(`${idClient_sur_place}`)
     .get()
     .then(doc => {
      console.log('userFound clientsPysique Detail 23', doc.data())
      setUser(doc.data())
      firebase.db
       .collection('adresse')
       .doc(`${doc.data().adresse}`)
       .get()
       .then(doc => {
        console.log('adresse  client Detail 52', doc.data())
        setAdresseGot(doc.data())
       })
     })
     .catch(err => console.log(err.message))
   firebase.db
    .collection('employesMenages')
    .doc(`${idEmployeMenage}`)
    .get()
    .then(doc => {
     console.log('employe  Detail 52', doc.data())
     setEmployeGot(doc.data())
    })
  }
  fetchThem()
 }, [detail])
 return (
  <div className="modalBackground1" style={{display:open?"block":"none"}}>
   <div className="modalContainer1">
    <h1>DETAILS DU COMMANDE</h1>
    <p>Nom du client: {user && user.nom}</p>
    <p>Prenom du client: {user && user.prenom}</p>
    <p>Télephone du client:{adresseGot && adresseGot.telephone }</p>
    <p>
     Adresse du client: {adresseGot &&
      adresseGot.commune } ,
      { adresseGot && adresseGot.zone} ,
      { adresseGot && adresseGot.quartier} ,
      { adresseGot && adresseGot.avenue} ,
      { adresseGot && adresseGot.numero}
    </p>
    <p>Date: {date}</p>
    <p>Date de presentation de l'employe: {dateArriver}</p>
    <p>frais de commission: {fraisComission}</p>
    <p>Exigences du client: {exigences}</p>
    <p>Employe de menage:
       {employeGot && employeGot.nom} ,
       {employeGot && employeGot.prenom} ,
       {employeGot && employeGot.typeService} ,
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

export default Details
