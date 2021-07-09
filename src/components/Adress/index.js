import React,{ useState, useContext, useEffect } from 'react';
import {FirebaseContext } from '../Firebase';
import {useHistory} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Adress = ({idChamp,champ,isUpdate,setTrack}) => {
    console.log("id passez",isUpdate);
    console.log("id passez",idChamp);
const history=useHistory()
const adressDatas = {
    id:"",
    commune: "",
    zone: "",
    quartier: "",
    avenue: "",
    numero: "",
    telephone: ""
}
const [getAdresse,setGetAdresse]=useState(null)
const [datas, setDatas] = useState(adressDatas)
const firebase = useContext(FirebaseContext)

const handleChange=(e)=>{
    setDatas({...datas, [e.target.id]: e.target.value });

}
useEffect(()=>{
    if(isUpdate){
       
        firebase.db.collection("users").doc(isUpdate).get().then(doc=>{
       

            firebase.db.collection("adresse").doc(doc.data().adresse).get().then(doc=>{
  
                 setDatas({id:doc.id,...doc.data()})


             })  
             
           })
        
    }
},[isUpdate])
const handleSubmit = (e)=>{
e.preventDefault();
const { 
    id,
    commune,
    zone,
    quartier,
    avenue,
    numero,
    telephone
}=datas
if(isUpdate){
    
    firebase.db.collection('adresse').doc(id).set({
        commune,
        zone,
        quartier,
        avenue,
        numero,
        telephone
           
       }).then(doc => {
        setTrack(false)
        toast.success(
            'Mise à jour de l\'adresse avec succes veille confirmer votre commande',
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
           console.log("successfully updated")}).catch(err=>console.log(err.message))
}else{


    firebase.db.collection('adresse').add({
        commune:commune , 
        zone:zone,     
        quartier:quartier, 
        avenue:avenue,   
        numero:numero,   
        telephone:telephone
    
           
       }).then(doc => {
    
         firebase.db.collection(`${champ}`).doc(`${idChamp}`).update({
            adresse:doc.id
         }).then(doc => {

            toast.success('Enregistrement avec succès !!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                
                });

             console.log("document erregistre",doc)
            
             history.push("/welcome")
            }).catch(err => console.log("error acure collection ",err))
       }).catch(err => console.log("error acure ",err))
      

}
}



const { commune, zone, quartier, avenue, numero, telephone } = datas
    return (
        <div className="formAdd">

             <form onSubmit={handleSubmit}>
                    <h5><strong>{isUpdate?"Mettre a jour l'adresse":"Ajout d'adresse"}</strong></h5>

                     <div className="inputBox">
                                <label htmlFor="commune">Commune</label>
                                <input onChange={handleChange} value={commune}   type="text" id="commune" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="zone">Zone</label>
                                <input onChange={handleChange} value={zone}   type="text" id="zone" required  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Quartier</label>
                                <input onChange={handleChange} value={quartier}   type="tel"  id="quartier" required  />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="text">Avenue</label>
                                <input onChange={handleChange} value={avenue}    type="text"  id="avenue"  required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="text">Numéro</label>
                                <input onChange={handleChange} value={numero}   type="number" step="any"  id="numero" required  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Télphone</label>
                                <input onChange={handleChange} value={telephone}  type="tel" id="telephone" required />
                            </div>

                            <button type='submit'>{isUpdate?"confirmez":"validez"}</button>
                        </form>
        </div>
    );
};

export default Adress;