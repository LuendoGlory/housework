import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Details  from '../Modal/Details'
import { FirebaseContext } from '../Firebase'


const Tables = () => {
 const firebase = useContext(FirebaseContext)
 const [commandes, setCommandes] = useState([])
 const [singleCommande, setSingleCommande] = useState(null)
 const [close, setClose] = useState(true)
 
useEffect(() => {
  console.log('entre de dans')

  let container = []
  if(firebase){
    firebase.db
     .collection('Commandes')
     .get()
     .then(querySnapshot => {
      querySnapshot.forEach(doc => {
       // doc.data() is never undefined for query doc snapshots
      //  container.push(doc.id)
  
      // const brush  ={...doc.id,...doc.data()} 
        container.push(doc.data())
       //  console.log('document container', ' => ', container)
      })
     })
     .then(() => {
      for (let i = 0; i < container.length; i++) {
       console.log(container[i].idEmployeMenage)
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
        .collection('users')
        .doc(`${container[i].idUser}`)
        .get()
        .then(query => {
          //console.log('first this is the user object', query.data().adresse)
         //  container.push()
         container[i].user = query.data()
         firebase.db.collection("adresse").doc(`${query.data().adresse}`).get().then(doc=>{
          //  console.log("ths is the address got",doc.data().commune);
           container[i].adresse=doc.data()
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
 }, [])

//  commandes && console.log('commandes out here', commandes)
 const [openModal, setOpenModal] = useState(false)

 const showModal = uuid => {

  setSingleCommande(commandes.find(com=>com.uuid==uuid))
  let c=commandes.find(com=>com.uuid==uuid)
  setSingleCommande(c)
  console.log("new single commande there",c);

  setOpenModal(true)
 }

 const closeModal = () => {
  setOpenModal(false)
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
      <th>Détails</th>
      <th>Edit</th>
      <th>Delete</th>
     </tr>
    </thead>

    <tbody>

      {commandes && commandes.map(com=> {


// const {adresse}=detail
// const {user}=detail
// const {telephone,commune,zone,quartier,avenue,numero}=adresse
// const {nom,prenom}=user

        const{uuid,user,date,dateArriver,adresse,fraisComission,employe}=com
        // console.log("single one",uuid,user,date,dateArriver,adresse,fraisComission,employe);
        console.log("single one com",com);
        return (

    <tr>
       <td>{uuid}</td>
       <td>{date}</td>
       <td>{dateArriver}</td>
       <td>{fraisComission}</td>
       <td>
        <button onClick={() => showModal(com.uuid)} type="button" class="btn btn-outline-info">Info</button>
       </td>
       <td>
        <button type="button" class="btn btn-secondary">
         Edit
        </button>
       </td>
       <td>
        <button type="button" class="btn btn-danger">
         Delete
        </button>
       </td>
      </tr>
    ) 
      
      }
        )}
    </tbody>
   </table>
     {
      //  console.log("sing",singleCommande)
       singleCommande &&  <Details close={close} setClose={setClose} detail={singleCommande}/>
      
     }
  </Fragment>
 )
}

export default Tables