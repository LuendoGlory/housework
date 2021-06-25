import React, { useContext,useEffect,useState } from 'react';
import {FirebaseContext } from '../Firebase';
import Section from "../SectionEmployers"

const ContainerService = (props) => {
   const {service}=props
   console.log("this is service props from ContainerService",service)
//    const[employees,setEmployees]=useState([])
   const [employees, setEmployees] = useState([])
const firebase = useContext(FirebaseContext);
useEffect(()=>{
    if(service){
      firebase.db.collection("employesMenages").where("typeService","==",service).where("isActive","==",false)
      .get()
      .then((querySnapshot) => {
       
            setEmployees(querySnapshot.docs.map(doc => {return {
                id:doc.id,
                employe:doc.data()}} ))
         
        
      
        
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    }
  
  },[])

console.log("object employees from containerServce",employees)

   return (
       <div>
           {employees? employees.map(em => <Section key={em.id} emp={em}></Section>):<p>no data found</p>}
       </div>
   )
};

export default ContainerService;