import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Details from '../Modal/Details'
import { FirebaseContext } from '../Firebase'
const PhysicTable = () => {
 const firebase = useContext(FirebaseContext)
 const [commandes, setCommandes] = useState([])
 const [adresse, setAdresse] = useState(null)
 const [singleCommande, setSingleCommande] = useState(null)
 const [close, setClose] = useState(true)

 const [openModal, setOpenModal] = useState(false)

 useEffect(() => {
  //.log('entre de dans')

  let container = []
  if (firebase) {
   firebase.db
    .collection('Demmande_sur_place')
    .get()
    .then(querySnapshot => {
     querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      //  container.push(doc.id)
      // const brush  ={...doc.id,...doc.data()}
      container.push(doc.data())
      //  //.log('document container', ' => ', container)
     })
    })
    .then(() => {
     for (let i = 0; i < container.length; i++) {
      //.log(container[i].idEmployeMenage)
      firebase.db
       .collection('employesMenages')
       .doc(`${container[i].idEmployeMenage}`)
       .get()
       .then(query => {
        //  console.log('first this is the employesMenages object', query.data().nom)
        //  container.push()
        container[i].employe = query.data()
       })

      // CHECK NOW FOR THE USERS
      firebase.db
       .collection('clientsPysique')
       .doc(`${container[i].idClient_sur_place}`)
       .get()
       .then(query => {
        //console.log('first this is the user object', query.data().adresse)
        //  container.push()
        // console.log('data user', query.data())
        container[i].user = query.data()
        firebase.db
         .collection('adresse')
         .doc(`${query.data().adresse}`)
         .get()
         .then(doc => {
          //  console.log("ths is the address got",doc.data().commune);
          container[i].adresse = doc.data()
         })
       })
      //  console.log('second this is the container[i].nom', container[i])
     }
    })
    .then(() => {
     setCommandes(container)

     return container
    })
    .catch(err => console.log(err.message))
  }
 })
 //  commandes && console.log('commandes out here', commandes)

 const showModal = uuid => {
  setSingleCommande(commandes.find(com => com.uuid == uuid))
  let c = commandes.find(com => com.uuid == uuid)
  console.log('single commande clicked', c)
  setSingleCommande(c)
  firebase.db
   .collection('adresse')
   .doc(`${c.adresse}`)
   .get()
   .then(doc => {
    setAdresse(doc.data())
   })
  //.log('new single commande there', c)
  setOpenModal(true)
 }

 const closeModal = () => {
  setOpenModal(false)
 }
 const deleteCommande = uuid => {
  //.log('this is uuid', uuid)
  firebase.db
   .collection('Demmande_sur_place')
   .doc(`${uuid}`)
   .delete()
   .then(() => {
    //.log('succefuly deleted')
   })
   .catch(err => console.log(err.message))
 }
 const valider = uuid => {
  firebase.db
   .collection('Demmande_sur_place')
   .doc(`${uuid}`)
   .update({ isValid: true })
   .then(() => {
    console.log('succefuly validated')
   })
   .catch(err => console.log(err.message))
 }
 const invalider = uuid => {
  firebase.db
   .collection('Demmande_sur_place')
   .doc(`${uuid}`)
   .update({ isValid: false })
   .then(() => {
    console.log('succefuly validated')
   })
   .catch(err => console.log(err.message))
 }

 return (
  <Fragment>
   <div className=""></div>

   <table className="tableau_style">
    <thead>
     <tr>
      <th>Id_Commande</th>
      <th>Date</th>
      <th>Présentation</th>
      <th>Comission</th>
      <th>valide</th>
      <th>Détails</th>
      <th>Valider/Invalider</th>
      <th>Delete</th>
     </tr>
    </thead>

    <tbody>
     {commandes &&
      commandes.map(com => {
       // const {adresse}=detail
       // const {user}=detail
       // const {telephone,commune,zone,quartier,avenue,numero}=adresse
       // const {nom,prenom}=user

       const {
        uuid,
        user,
        date,
        dateArriver,
        adresse,
        fraisComission,
        isValid,
        employe,
       } = com
       // console.log("single one",uuid,user,date,dateArriver,adresse,fraisComission,employe);
       //.log('single one com', com)
       return (
        <tr>
         <td>{uuid}</td>
         <td>{date}</td>
         <td>{dateArriver}</td>
         <td>{fraisComission}</td>
         <td style={{ color: isValid ? 'green' : 'red' }}>
          {isValid ? 'OUI' : 'NON'}
         </td>
         <td>
          <button
           onClick={() => showModal(com.uuid)}
           type="button"
           class="btn btn-outline-info"
          >
           Info
          </button>
         </td>
         <td>
          {isValid ? (
           <button className="btn btn-success" onClick={() => invalider(uuid)}>
            invalider
           </button>
          ) : (
           <button className="btn btn-danger" onClick={() => valider(uuid)}>
            valider
           </button>
          )}
         </td>

         <td>
          <button
           type="button"
           onClick={() => deleteCommande(uuid)}
           class="btn btn-danger"
          >
           Delete
          </button>
         </td>
        </tr>
       )
      })}
    </tbody>
   </table>
   {
    //  console.log("sing",singleCommande)
    singleCommande && (
     <Details
      close={close}
      setClose={setOpenModal}e
      detail={singleCommande}
      adresse={adresse}
     />
    )
   }
  </Fragment>
 )
}
export default PhysicTable
