import React from 'react';
import {Link } from 'react-router-dom';

const Leanding = () => {

    
    return (
        
        <main className="welcomePage">
            <h3>HOUSEWORK BUJUMBURA</h3>
            <p>Housework est un nouveau plateformes des services ménagés dans la ville  <br/>
            de Bujumbura aux entreprises, aux ménages et aux expatriers.</p>
            <p>Nous avons plusieurs services à votre disposition dont:
            le Babysiting<br /> Jardinierie, Domestique, chefs cuisinier, Santinel, coursiers et piscinistes
            </p>
            <p>Cliquer sur COMMENCER pour vous connecter si vous avez déja un compte<br /> 
            Housework, si non vous allez créer un</p>
            <p>Si vous êtes déjà connécté, cliquez directement sur le menu services en haut </p>
            <Link className="btn-welcome" to="/login">COMMENCER</Link>
            
            <div className="leftBox">
            </div>

         
            
        </main>

           
        

        
        
        
    );
};

export default Leanding;