import React, { useState, useContext, useEffect } from 'react';
import {Link } from 'react-router-dom';
import {FirebaseContext } from '../Firebase';

const Login = (props) => {

    //les variables d'états
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [ btn, setBtn]= useState(false);
    const [ error, setError]= useState('');

    const firebase= useContext(FirebaseContext);


    const validationFormulaireConnexion = e =>{
        e.preventDefault()
        firebase.loginUser(email, password)
        
        .then(user=>{


            setEmail('');
            setPassword('');
           let userGotten= firebase.getCurrentUser(user.user.email)
       
           firebase.db.collection("users").where("email", "==", email)
           .get()
           .then((querySnapshot) => {
                let datas=null
               querySnapshot.forEach((doc) => {  
                 console.log(doc.data())
                    datas=doc.data()
               });
               if (datas.role === "admin") {
                   return props.history.push('/admin')
                }else 
                return props.history.push('/welcome')

               
           })





        //    if (userGotten) {
        //     console.log(userGotten)
        //         // if (userGotten[0].role === "user") {
                    
        //         //   return  props.history.push("/welcome")
        //         // }else {

        //         //     props.history.push("/admin")
        //         // }
             
        //     }
            
   
        })
        .catch(error=>{
            setError(error);
            setEmail('');
            setPassword('');
        })
    }

    useEffect(()=>{
        if (password.length > 5 && email !== "") {
            setBtn(true);
        }else if(btn === true){
            setBtn(false);

        }
    }, [password, email, btn]);

    const btnDispaly= btn ? <button>Connexion </button> : <button disabled>Connexion</button>
 
//GESTION DES ERREURS DE FIREBASE */

const connexionErrot = error !== "" && <span>{error.message} </span>

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
        

            <div className="formSignup">

<form onSubmit={validationFormulaireConnexion}>

     
    <h2><strong>CONNECTEZ-VOUS</strong></h2>

    <div className="inputBox">
        <label htmlFor="email">Email</label>
        <input onChange= {e => setEmail(e.target.value)} type="email"value={email} required autoComplete="off" />
    </div>

    <div className="inputBox">
        <label htmlFor="password">Mot de passe</label>
        <input onChange={e => setPassword(e.target.value)} type="password" value={password} required autoComplete="off" />
    </div>
    <p>{connexionErrot}</p>

    <Link className="linkLogin" to="/forgetPassword">Mot de passe oublié? recuperez-le ici</Link>
    <Link className="linkLogin" to="/signup">Nouveau sur Housework? Inscrivez-vous</Link>
    {btnDispaly}
</form>
</div>
            </div>
            
        </div>
    );
};

export default Login;