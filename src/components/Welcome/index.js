import React, { useState, Fragment, useContext, useEffect }from 'react';
import Services from '../Services';
import Logout from '../Logout';
import {FirebaseContext } from '../Firebase';
 

const Welcome = (props) => {

    const [userSession, setUserSession]=useState(null);
    const [userData, setUserData]=useState({});

    const firebase =useContext(FirebaseContext);


    useEffect(()=>{
       let myListener= firebase.auth.onAuthStateChanged(user =>{
            user ? setUserSession(user) : props.history.push("/login");
        })
 
          //SI useSession ==null
        if (!!userSession) {
            firebase.user(userSession.uid)
        .get()
        .then(doc =>{
            if (doc && doc.exists) {
                const myUserData = doc.data();
                setUserData(myUserData);
            }
    
        })
        .catch((error)=>{
            console.log(error);
        })
        }

        return(()=>{
            myListener();
        })
    }, [userSession, firebase, props.history]);

  
    return userSession === null? (
     <Fragment>
         <div className="loader"></div>
         <p className="loaderText">Veillez patienter...</p>
     </Fragment>

): (
    <div className="quiz-bg">
    <div className="container">
     <Logout />
    <Services  userData={userData}/>
    </div>
    
</div>
)
   
};

export default Welcome;