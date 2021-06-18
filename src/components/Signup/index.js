import React, {useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {FirebaseContext } from '../Firebase';
import { v4 as uuidv4 } from 'uuid';
import Adress from '../Adress';


const Signup = (props) => {

    const myDataUser={
        prenom: "",
        email: "",
        password:"",
        confirmPassword: "",
        role: "user"
    } 

    const [dataUser, setDataUser] = useState(myDataUser);
    const firebase = useContext(FirebaseContext);
    const [error, setError] = useState("");
    const [track, setTrack] = useState(false)
    const [unikId, setUnikId] = useState(null)
      
    const handleChange=e=>{
        setDataUser({ ...dataUser, [e.target.id]: e.target.value})
    }

    const handaleSubmit = e =>{
        e.preventDefault()
        const { email, password, prenom, role } = dataUser;
        firebase.signupUser(email, password)
        .then(authUser=>{
            setUnikId(authUser.user.uid)
             return firebase.user(authUser.user.uid).set({
               
                prenom,
                email,
                role,
                adresse:""
            })
        })
        .then(()=>{
            setDataUser({ ...dataUser});
            setTrack(true)
            

        })
        .catch((error)=>{
            setDataUser({ ...myDataUser});
            setError(error);
        })
    }

    const { prenom, email, password, confirmPassword} = dataUser;

const btn = prenom === '' || email === '' || password === '' || password !== confirmPassword ?
<button disabled>ENREGISTRER</button> : <button>ENREGISTRER</button>
//Gestion des erreurs
const errorMessage = error !== '' && <span> {error.message} </span>

// affichage des rendus de ma page dans JSX en dessous
    return (
        <>
        {!track && 
        <div className="signUpLoginBox">
            <div className="slContainer">

                   <div className="formSignup">

                    <form onSubmit={handaleSubmit}>
                            <h2><strong>CREER VOTRE COMPTE</strong></h2>

                            <div className="inputBox">
                                <label htmlFor="prenom">Prénom</label>
                                <input onChange={handleChange} value={prenom} type="text" id="prenom" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange} value={email} type="email" id="email" required  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="password">Mot de passe</label>
                                <input onChange={handleChange} value={password}  type="password" id="password"  />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                                <input onChange={handleChange} value={confirmPassword}  type="password" id="confirmPassword" required autoComplete="off" />
                            </div>

                            <Link className="linkLogin" to="/login">Vous avez déja un compte? Connectez-vous</Link>
                            {errorMessage}

                            { btn }
                        </form>
                   </div>

               </div>
            </div>}
            {track && <Adress id={unikId} champ="users"/>}

        
        </>
        
            
    );
};

export default Signup;