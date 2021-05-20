import React, { useState, useContext,useEffect} from 'react';
import {FirebaseContext } from '../Firebase';
import {uuid as V4} from 'uuid'


const EmloyeMenage =()=>{

    const menagerData={
        nom: "",
        prenom: "",
        telephone: "",
        carteIdentite:  "",
        dateNaissance: "",
        salaire: "",
        description: "",
        photo:null,
        heureService:"",
        typeService:""



    }
 
    const [services, setServices] = useState("");
    const [datasPersonnels, setDatasPersonnels] = useState(menagerData);
    const [iPhoto
        , setiPhoto
    ] = useState(null)

    const firebase = useContext(FirebaseContext);
  

  
  
   const uploadImages=()=>{
 
     
   }

  
  
 
    const handleChange=(e)=>{
        setDatasPersonnels({...datasPersonnels, [e.target.id]: e.target.value });

    }

    const handleSubmit = (e)=>{
        
        e.preventDefault();
      console.log("limag",iPhoto)
        const { nom, prenom, telephone, carteIdentite, dateNaissance, salaire,heureService,photo, description} = datasPersonnels
       console.log(datasPersonnels)
       
       const uplaodRef=firebase.storage.ref(`photos/${iPhoto.name}`).put(iPhoto)
       uplaodRef.on("state_changed",snapShoot=>{
        //  then here we can update progressBar variable
  
      //   const progress=Math.round(
      //     (snapShoot.bytesTransferred / snapShoot.totalBytes)/100
      //   )
      //   setProgressBar(progress)
       console.log("image added succefully")
  
       
       },
      //  here i catch error and  as is not a friendly message i 
      // console it hahah lol
       err=>console.log(err),
      //THIS CALLBACK FUNCTION BRIEF GET THE URL OF THE IMAGE FROM THE DATABASE(storage) THEN UPDATE THE POST  
  
       ()=>{
  
  
        firebase.storage.ref("photos").child(iPhoto.name).getDownloadURL().then(
          url=>{
              
            // so we put  the whole post in firestore
            firebase.db.collection("employesMenage").add({
              nom:nom,
               prenom:prenom,
                telephone:telephone,
                carteIdentite:carteIdentite,
                 dateNaissance:dateNaissance,
                  salaire:salaire,
                  heureService:heureService,
                  photo:url, 
                  description:description
                
             }
  
            )
          }
  
        )
  
       }
       )
       
    }


    const { nom, prenom, telephone, carteIdentite, dateNaissance, salaire, description, photo, heureService,typeService,carteNational} = datasPersonnels 
// affichage des rendus de ma page dans JSX en dessous
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">

                   <div className="formAdd">

                    <form onSubmit={handleSubmit} >
                            <h5><strong>ENREGISTRER UN PERSONNEL DE MENAGE</strong></h5>

                            <div className="inputBox">
                                <label htmlFor="prenom">Nom</label>
                                <input onChange={handleChange} value={nom}  type="text" id="nom" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Prenom</label>
                                <input onChange={handleChange} value={prenom}   type="text" id="prenom" required  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Télephone</label>
                                <input onChange={handleChange} value={telephone}  type="tel"  id="telephone"  />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="text">Numero de carte d'identite</label>
                                <input onChange={handleChange} value={carteIdentite}  type="text"  id="carteIdentite"  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="text">Date de naissance</label>
                                <input onChange={handleChange} value={dateNaissance}  type="date" id="dateNaissance"  />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="text">Temps de service</label>

                               <select className="selectServices" onChange={handleChange} id="heureService" value={heureService} >
                                    <option value="partiel">Temps partiel</option>
                                    <option value="journee">Journée</option>
                                    <option value="heure"> Par Heure</option>
                                    <option value="commande">Par commande</option>

                               </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="text">Type de service</label>

                               <select onChange={handleChange} id="typeService" value={typeService}
                                     type="text" className="selectServices">
                                    <option value="staBabyssiteurte">Babyssiteur</option>
                                    <option value="domestique">Domestique</option>
                                    <option value="Jardinier">Jardinier</option>
                                    <option value="chef_cuisinier">Chef cuisinier</option>
                                    <option value="Santinel">Santinel</option>
                                    <option value="coursier">Coursier</option>
                                    <option value="pisciniste">Pisciniste</option>

                               </select>
                               {services}
                            </div>
                            <div className="inputBox">
                                <label htmlFor="salaire">Salaire</label>
                                <input onChange={handleChange} value={salaire} type="text"  id="salaire" required autoComplete="off" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="photo">Photo</label>
                                <input onChange={(e)=>{
                                    if(e.target.files[0])
                                    setiPhoto(e.target.files[0])
                                }}  type="file"  id="photo" required autoComplete="off" />
                            </div>
                            {/* <div className="inputBox">
                                <label htmlFor="carte">Carte national d'identité</label>
                                <input onChange={(e)=>{
                                    if(e.target.files[0])
                                     setiCarte(e.target.files[0])
                                }} value={carteNational} type="file"  id="carteNational" required autoComplete="off" />
                            </div> */}
            
                            <div className="inputBox">
                                <label htmlFor="text">Description</label>
                                <textarea onChange={handleChange} value={description}  type="textarea"  id="description" placeholder="La description du profil de personnel de menage">
                                    
                                </textarea>
                            </div>

                            <button>Enregistrer</button>
                        </form>
                   </div>

               </div>
            </div>
            
    );
};

export default EmloyeMenage;