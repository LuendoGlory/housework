import React, {useState, useEffect, useContext } from 'react';
import {FirebaseContext } from '../Firebase';

const Logout = () => {

    const [checked, setChecked ] = useState(false);
    const firebase = useContext(FirebaseContext);

    useEffect(()=>{
        if (checked === true) {
            firebase.sinOutLogUser();
            console.log("Déconnexion")
        }
    }, [checked, firebase]);

    const deconnexionUser = event =>{
        setChecked(event.target.checked);
        
    }

    return (
        <div className='logoutContainer'>
            <label className="switch">

                <input type="checkbox"

                  onChange ={deconnexionUser}
                  checked = {checked}
                
                />

                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Logout;