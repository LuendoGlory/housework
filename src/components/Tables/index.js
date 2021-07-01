import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import { FirebaseContext } from '../Firebase'

const Tables = () => {
 const firebase = useContext(FirebaseContext)
 const [commandes, setCommandes] = useState([])

 useEffect(() => {
  console.log('entre de dans')

  let container = []
  firebase.db
   .collection('Commandes')
   .get()
   .then(querySnapshot => {
    querySnapshot.forEach(doc => {
     // doc.data() is never undefined for query doc snapshots
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
       container[i].employe = query.data().nom
      })

     // CHECK NOW FOR THE USERS
     firebase.db
      .collection('users')
      .doc(`${container[i].idUser}`)
      .get()
      .then(query => {
       //  console.log('first this is the employesMenages object', query.data().nom)
       //  container.push()
       container[i].user = query.data().prenom
      })
     //  console.log('second this is the container[i].nom', container[i])
    }
   })
   .then(() => {
    setCommandes(container)

    return container
   })
   .catch(err => console.log(err.message))
 }, [])

 commandes && console.log('commandes out here', commandes)
 const [openModal, setOpenModal] = useState(false)

 const showModal = id => {
  setOpenModal(true)
 }

 const closeModal = () => {
  setOpenModal(false)
 }

 const details = 'Details'

 return (
  <Fragment>
   <div className=""></div>

   <table className="tableau_style">
    <thead>
     <tr>
      <th>Id_Commande</th>
      <th>Client</th>
      <th>Date</th>
      <th>Présentation</th>
      <th>Id_Adresse</th>
      <th>Comission</th>
      <th>E. menage</th>
      <th>Détails</th>
      <th>Valider</th>
      <th>Edit</th>
      <th>Delete</th>
     </tr>
    </thead>

    <tbody>
     <tr>
      <td>5vkjhckskjcskc</td>
      <td>Luendo</td>
      <td>2021-02-03</td>
      <td>2021-02-05</td>
      <td>Ngagara</td>
      <td>10000</td>
      <td>Iradukunda</td>
      <td>
       <Link onClick={() => showModal(details)}>Voir plus</Link>
      </td>
      <td>
       <button type="button" class="btn btn-success">
        Valider
       </button>
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
     <tr>
      <td>5vkjhckskjcskc</td>
      <td>Luendo</td>
      <td>2021-02-03</td>
      <td>2021-02-05</td>
      <td>Buyenzi</td>
      <td>10000</td>
      <td>Iradukunda</td>
      <td>
       <Link onClick={() => showModal(details)}>Voir plus</Link>
      </td>
      <td>
       <button type="button" class="btn btn-success">
        Valider
       </button>
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
     <tr>
      <td>5vkjhckskjcskc</td>
      <td>Luendo</td>
      <td>2021-02-03</td>
      <td>2021-02-05</td>
      <td>Nyakabiga</td>
      <td>10000</td>
      <td>Iradukunda</td>
      <td>
       <Link onClick={() => showModal(details)}>Voir plus</Link>
      </td>
      <td>
       <button type="button" class="btn btn-success">
        Valider
       </button>
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
     <tr>
      <td>5vkjhckskjcskc</td>
      <td>Luendo</td>
      <td>2021-02-03</td>
      <td>2021-02-05</td>
      <td>Bwie</td>
      <td>10000</td>
      <td>Iradukunda</td>
      <td>
       <Link onClick={() => showModal(details)}>Voir plus</Link>
      </td>
      <td>
       <button type="button" class="btn btn-success">
        Valider
       </button>
      </td>
      <td>
       <button type="button" className="btn btn-secondary">
        Edit
       </button>
      </td>
      <td>
       <button type="button" className="btn btn-danger">
        Delete
       </button>
      </td>
     </tr>
    </tbody>
   </table>

   <Modal showModal={openModal} closeModal={closeModal}>
    <div className="modalHeader">
     <h2>DESCRIPTION DU COMMANDE</h2>
    </div>

    <div className="modalBody">
     <div>
      <p>dateArriver: le 6 juillet</p>
      <p>exigences: il doit etre plus propre</p>
      <p>EmployeMenage: Irakoze</p>
      <p>fraisComission: 10000</p>
      <p>Client_sur_place: Fidele</p>
      <p>Client_sur_place: Fidele</p>
      <p>date de Commande: Fidele</p>
     </div>
    </div>

    <div className="modalFooter">
     <button className="modalBtn">Fermer</button>
    </div>
   </Modal>
  </Fragment>
 )
}

export default Tables
