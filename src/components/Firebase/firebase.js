import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

 const firebaseConfigiration = {
    apiKey: "AIzaSyAr53KMTh7-4btIYzjJCSP_gQh8j0SazGY",
    authDomain: "housework-app-eea83.firebaseapp.com",
    projectId: "housework-app-eea83",
    storageBucket: "housework-app-eea83.appspot.com",
    messagingSenderId: "1092643042387",
    appId: "1:1092643042387:web:84cd5791438eab23cf82a6"
  };

  

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfigiration);
        this.auth= app.auth();
        this.db = app.firestore();
        this.storage=app.storage()
    }



    //Fonction d'authentification

    signupUser=(email, password)=>
     this.auth.createUserWithEmailAndPassword(email, password);
    

    //Fonction de connexion

    loginUser=(email, password) =>
     this.auth.signInWithEmailAndPassword(email, password);

     //Foction de déconnexion
  
     sinOutLogUser=()=>this.auth.signOut();
    // avoir l'utilisateur 
    getCurrentUser=(email)=>{
       this.db.collection("users").where("email", "==", email)
            .get()
            .then((querySnapshot) => {
                 let datas=null
                querySnapshot.forEach((doc) => {  
                  datas=doc.data()
                });
                return datas
                
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
     // Recuperer mot de passe

     passwordReset = email => this.auth.sendPasswordResetEmail(email);
     // fonction collection des utilisateur
     user=uid=>this.db.doc(`users/${uid}`);
     employesMenages=(uid)=>this.db.doc(`employesMenages/${uid}`);

    //collection des personnels de menages
  



}


export default Firebase;
