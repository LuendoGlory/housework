import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Details from '../Modal/Details'
import { FirebaseContext } from '../Firebase'
const EmployesTables = () => {
 const firebase = useContext(FirebaseContext)
 const [employees, setEmployees] = useState([])
 const [singleCommande, setSingleCommande] = useState(null)
 const [close, setClose] = useState(true)
 const [openModal, setOpenModal] = useState(false)
 useEffect(() => {
  let container = []
  if (firebase) {
   firebase.db
    .collection('employesMenages')
    .get()
    .then(querySnapshot => {
     querySnapshot.forEach(doc => {
      console.log('this is employees tables', doc.data())
      //  setEmployees(doc.data())
      container.push(doc.data())
     })
     setEmployees(container)
    })

   employees[0] && console.log('employees', employees)
  }
 }, [firebase])
 const deleteEmploye = uuid => {
  //.log('this is uuid', uuid)
  firebase.db
   .collection('employesMenages')
   .doc(`${uuid}`)
   .delete()
   .then(() => {
    console.log('succefuly deleted')
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
      <th>prenom</th>
      <th>numero d'indentite</th>
      <th>date de naissance</th>
      {/* <th>description</th> */}
      <th>genre</th>
      <th>service</th>
      <th>salaire</th>
      <th>active</th>
      <th>delete</th>
     </tr>
    </thead>

    <tbody>
     {employees &&
      employees.map(empl => {
       console.log('single empl', empl)

       const {
        adresse,
        carteIdentite,
        dateNaissance,
        description,
        genre,
        isActive,
        prenom,
        typeService,
        salaire,
        uuid,
       } = empl

       return (
        <tr>
         <td>{uuid}</td>
         <td>{prenom}</td>
         <td>{carteIdentite}</td>
         <td>{dateNaissance}</td>
         {/* <td>{description}</td> */}
         <td>{genre == 'm' ? 'homme' : 'femme'}</td>
         <td>{typeService}</td>
         <td>{salaire}</td>
         <td style={{ color: isActive ? 'green' : 'red' }}>
          {isActive ? 'OUI' : 'NON'}
         </td>

         <td>
          <button
           type="button"
           onClick={() => deleteEmploye(uuid)}
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
      setClose={setClose}
      detail={singleCommande}
      physic={true}
     />
    )
   }
  </Fragment>
 )
}
export default EmployesTables
