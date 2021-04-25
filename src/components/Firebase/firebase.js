import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
    }


    //Fonction d'authentification

    signupUser=async(user)=>{
      const {email,password,role,prenom}=user
     await this.auth.createUserWithEmailAndPassword(email, password);
      this.db.doc('users').set({
        email,prenom,role
      }).then(user => console.log(`user signup${user}`))
    }

    //Fonction de connexion

    loginUser=(email, password) =>
     this.auth.signInWithEmailAndPassword(email, password);

     //Foction de déconnexion

     sinOutLogUser=()=>this.auth.signOut();

     // Recuperer mot de passe

     passwordReset = email => this.auth.sendPasswordResetEmail(email);


// fonction collection des utilisateur
     user = uid => this.db.doc(`users/${uid}`);
}
export default Firebase;