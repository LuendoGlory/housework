import React from 'react';
import {Link } from 'react-router-dom';

const Leanding = () => {

    
    return (
        
        <main className="welcomePage">
            <h3>HOUSEWORK BUJUMBURA</h3>
            <p>Housework est un nouveau plateforme de services ménage dans la ville  <br/>
            de Bujumbura aux entreprises et aux ménages.</p>
            <p>Nous avons plusieurs services à votre disposition dont:
            le Babysiting<br /> Jardinierie, Domestique, chefs cuisinier, Santinel.
            </p>
            <p>Cliquer sur COMMENCER pour vous connecter si vous avez déja un compte<br /> 
            Housework, si non vous allez en créer un</p>
            <p>Si vous êtes déjà connécté, cliquez directement sur le menu services en haut </p>
            <Link className="btn-welcome" to="/login">COMMENCER</Link>
            
            <div className="leftBox">
            </div>

         
            
        </main>

           
        

        
        
        
    );
};

export default Leanding;