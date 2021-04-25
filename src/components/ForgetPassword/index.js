import React, {useState, useContext } from 'react';
import {Link } from 'react-router-dom';
import {FirebaseContext } from '../Firebase';

const ForgetPassword = props => {

const [email, setEmail] = useState("");
const [success, setSuccess] = useState(null);
const [error, setError] = useState(null);
const firebase = useContext(FirebaseContext);

const passwordForget= e =>{
 e.preventDefault();
    firebase.passwordReset(email)
    .then(user=>{
        setError(null);
        setSuccess(` Un message a été evoyer à l'adresse email ${email} pour changer le mot de passe`);
        
        setTimeout(()=>{
            props.history.push("/login");
        }, 5000)
    })
    .catch(error =>{
        setError(error);
        setEmail("")
    })
}
//condition d'affichage du bouton
const disabled = email === "";

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
        

            <div className="formSignup">

<form onSubmit={passwordForget}>

    { success && <p className="succesMsg"> {success} </p>  }
    <h2><strong>MOT DE PASSE OUBLIE ?</strong></h2>

    <div className="inputBox">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={e => setEmail(e.target.value)} value={email} required autoComplete="off" />
    </div>

    { error && <span> {error.message} </span> }

    <Link className="linkLogin" to="/login">Vous-avez un compte Housework? Connectez-vous</Link>

    <button disabled={disabled}> RECUPERER </button>
</form>
</div>
            </div>
            
        </div>
    );
};

export default ForgetPassword;