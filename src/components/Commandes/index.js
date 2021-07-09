import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'
import Adress from '../Adress'
import ModalConfirm from '../ModalConfirm'
import { v4 as uuidv4 } from 'uuid'
import dateformat from 'dateformat'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const Commandes = props => {
 const [openModal, setOpenModal] = useState(false)

 const { id, service } = props.match.params
 const [currentUser, setCurrentUser] = useState()
 const [idAdress, setIdAdress] = useState('')
 const [track, setTrack] = useState(false)
 const [unikId, setUnikId] = useState(uuidv4())
 const [isUpdate, setIsUpdate] = useState('')
 //  console.log('this is the id and service', id, service)
 useEffect(() => {
  setCurrentUser(firebase.auth.currentUser)
 }, [id])
 // currenteUser.uid
 const dataCommandes = {
  exigences: '',
  idUser: '',
  idEmployeMenage: '',
  dateArriver: '',
 }
 const [commande, setCommande] = useState(dataCommandes)
 const firebase = useContext(FirebaseContext)

 const handleChange = e => {
  setCommande({ ...commande, [e.target.id]: e.target.value })
 }

 // FONCTION QUI ACTIVE
 const valide = (id, champ) => {
  firebase.db
   .collection(`${champ}`)
   .doc(`${id}`)
   .update({ isActive: true })
   .then(data => console.log('mise a jour'))
 }

 const handleSubmit = e => {
  e.preventDefault()
  const { dateArriver, exigences, date } = commande

  firebase.db
   .collection('Commandes')
   .where('idUser', '==', currentUser.uid)
   .get()
   .then(querySnapshot => {
    querySnapshot.forEach(doc => {
     // doc.data() is never undefined for query doc snapshots
    })
   })
   .catch(error => {
    console.log('Error getting documents: ', error)
   })

  if (localStorage.getItem('client')) {
   firebase.db
    .collection('employesMenages')
    .doc(`${id}`)
    .get()
    .then(doc => {
     //  console.log('this is the employesMenage', doc.data())

     firebase.db
      .collection('Demmande_sur_place')
      .doc(unikId)
      .set({
       uuid: unikId,
       dateArriver: dateArriver,
       exigences: exigences,
       idEmployeMenage: id,
       fraisComission: Math.ceil(parseInt(doc.data().salaire, 10) / 10),
       idClient_sur_place: localStorage.getItem('client'),
       date: dateformat(new Date()),
      })
      .then(doc => {
       valide(id, 'employesMenages')
       localStorage.removeItem('client')
       //  console.log('commande physic ajouter', doc.doc)
      })
      .catch(err => console.log('error qcure', err.message))
    })
  } else {
   firebase.db
    .collection('employesMenages')
    .doc(`${id}`)
    .get()
    .then(doc => {
     //  console.log('this is the employesMenage', doc.data())
     valide(id, 'employesMenages') 
     firebase.db
      .collection('Commandes')
      .doc(`${unikId}`)
      .set({
       uuid: unikId,
       dateArriver: dateArriver,
       exigences: exigences,
       idUser: currentUser.uid,
       fraisComission: Math.ceil(parseInt(doc.data().salaire, 10) / 10),
       idEmployeMenage: id,
       date: dateformat(new Date()),
       isValid: false,
      })
      .then(doc => {
       toast.success(
        'Bravooo !!! vous avec commandé votre employé de menage. rester en ligne nous allons vous lamener chez vous dans le délai',
        {
         position: 'top-center',
         autoClose: 10000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
        }
       )

       valide(id, 'employesMenages')
       props.history.push('/welcome')
      })
      .catch(error => console.log('error acure', error.message))
    })
  }
 }

 const closeModal = () => {
  setOpenModal(false)
 }

 const { Commandes, exigences, date } = commande

 return (
  <>
   {!track && (
    <div className="signUpLoginBox">
     <div className="slContainer">
      <div className="formSignup">
       <form onSubmit={handleSubmit}>
        <h2>
         <strong> PASSER VOTRE DEMANDE </strong>
        </h2>

        <div className="inputBox">
         <label htmlFor="text">
          Date de présentation de l'employé de menage
         </label>
         <input onChange={handleChange} type="date" id="dateArriver" />
        </div>

        <div className="inputBox">
         <label htmlFor="text"> Vos exigences</label>
         <textarea
          onChange={handleChange}
          type="textarea"
          id="exigences"
          placeholder="La description du profil de personnel de menage"
         ></textarea>
        </div>

        <p>
         Veillez verrifier vos informations avant de confirmer votre demande
         d'employer de menage chez Housework
        </p>

        <button type="submit"> Confirmer </button>
        <button
         onClick={() => {
          setTrack(true)
         }}
        >
         {' '}
         changer votre adresse{' '}
        </button>
       </form>
      </div>
     </div>
    </div>
   )}
   {track && (
    <Adress idChamp={unikId} champ="Commandes" isUpdate={currentUser.uid} setTrack={setTrack} />
   )}

   {/* -- modal pop up  */}
   <ModalConfirm showModal={openModal} closeModal={closeModal} />
  </>
 )
}
export default Commandes
