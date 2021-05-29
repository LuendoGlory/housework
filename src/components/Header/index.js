import React from 'react';
import { Link,useLocation} from "react-router-dom"

const Header = () => {
    const location=useLocation()
    const form = ["users", "paiement", "employemenage","commandes","employes"];
    return (
       
      <>
                <header>


        <div className="banner-container">
            <nav>
            
            {location.pathname === "/admin" ||
                 location.pathname === `/admin/users` 
                || location.pathname === `/admin/commandes` 
                || location.pathname === `/admin/paiement`
                || location.pathname === `/admin/employemenage`
                || location.pathname === `/admin/employes`

            ?(

                
                <ul>
                {/* /adminservices/:page */}
                <li><Link to="/admin/users">Utilisateurs</Link></li>
                <li><Link to="/admin/employemenage">Personnels de menage</Link></li>
                <li><Link to="/admin/commandes">Commandes</Link></li>
                <li><Link to="/admin/paiement">Paiement</Link></li>
                <li><Link to="/admin/employes">Emloyés</Link></li>
            
            </ul>
            
            ):(
                <ul>

                    <li><Link className="logo" to="/"><h2>Housework</h2></Link></li>
                    <li><Link to="/welcome">Services</Link></li>
                    <li><Link to="/utilisation">Utilisation</Link></li>
                    <li><Link to="/contact">Contacts</Link></li>
                </ul>
            )
            
            
            
            
            } 
            
        </nav>
        
        </div>

        </header>
      </>
        
    );
};

export default Header;