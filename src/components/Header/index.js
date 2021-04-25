import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>

            <div className="banner-container">
                <nav>
                    
                    <ul>
                    <li><Link className="logo" to="/"><h2>Housework</h2></Link></li>
                    <li><Link to="/welcome">Services</Link></li>
                    <li><Link to="/utilisation">Utilisation</Link></li>
                    <li><Link to="/contact">Contacts</Link></li>
                    {/*<li> <button className="connexion1"><Link to="/login">Connexion</Link></button></li>
                    <li> <button className="connexion1"><Link to="/signup">Authentification</Link></button></li>*/}
                   </ul>
            </nav>
              
            </div>

        </header>
        
    );
};

export default Header;