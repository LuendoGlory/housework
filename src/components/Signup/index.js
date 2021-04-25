import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import {FirebaseContext } from '../Firebase';

const Signup = (props) => {

    const signupUser={
        prenom: "",
        email: "",
        password: "",
        confirmPassword: "",
        role:"user"
    }
    
    //variables d'état: useState, useContext
const [signupUserAuth, setSignupUserAuth]= useState(signupUser);
const [error, setError]= useState('');
const firebase= useContext(FirebaseContext);

// fonction de capture des données de formulaire
 const authentifierUtilisateurs = e => {
    setSignupUserAuth( {...signupUserAuth, [e.target.id]: e.target.value});
}

//fonction de validation de formulaire avec l'évenement onSubmit qui va faire recour à firebase
const formSubmint = e =>{
 e.preventDefault()
 const { email, password, prenom }= signupUserAuth;
 firebase.signupUser(email, password)

 //bf firestore collection users
.then(authUser=>{
    console.log("enregistrer")
     return firebase.user(authUser.user.uid).set({
       prenom,
         email,
        password,

 })
})
 //firebase authentification response
 .then(()=>{
    setSignupUserAuth({...signupUser})
    props.history.push("/welcome");
 })
 .catch(error=>{
    setError(error);
    setSignupUserAuth({...signupUser});
})
}

const {prenom, email, password, confirmPassword}= signupUserAuth;

const btn = prenom === '' || email === '' || password === '' || password !== confirmPassword ?
<button disabled>ENREGISTRER</button> : <button>ENREGISTRER</button>
//Gestion des erreurs
const errorMessage = error !== '' && <span> {error.message} </span>

// affichage des rendus de ma page dans JSX en dessous
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">

                   <div className="formSignup">

                        <form onSubmit={formSubmint}>

                            {errorMessage}

                            <h2><strong>CREER VOTRE COMPTE</strong></h2>

                            <div className="inputBox">
                                <label htmlFor="prenom">Prénom</label>
                                <input onChange={authentifierUtilisateurs} value={prenom} type="text" id="prenom" required autoComplete="off" />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="email">Email</label>
                                <input onChange={authentifierUtilisateurs} value={ email } type="email" id="email" required autoComplete="off" />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="password">Mot de passe</label>
                                <input onChange={authentifierUtilisateurs} value={password} type="password" id="password" required autoComplete="off" />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                                <input onChange={authentifierUtilisateurs} value={ confirmPassword} type="password" id="confirmPassword" required autoComplete="off" />
                            </div>

                            <Link className="linkLogin" to="/login">Vous avez déja un compte? Connectez-vous</Link>

                            { btn }
                        </form>
                   </div>

               </div>
            </div>
            
    );
};

export default Signup;