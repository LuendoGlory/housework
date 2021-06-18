import React from 'react';
import { Link,useLocation} from "react-router-dom"

const Header = () => {
    const location=useLocation()
    const form = ["users", "paiement", "employemenage","commandes","clientsPhysique"];
    return (
       
      <>
                <header>


        <div className="banner-container">
            <nav>
            
            {location.pathname === "/admin" ||
                 location.pathname === `/admin/users` 
                || location.pathname === `/admin/commandes` 
                || location.pathname === `/admin/employemenage`
                || location.pathname === `/admin/clientsPhysique`

            ?(

                
                <ul>
                {/* /adminservices/:page */}
                <li><Link to="/admin/users">Utilisateurs</Link></li>
                <li><Link to="/admin/employemenage">Personnels de menage</Link></li>
                <li><Link to="/admin/commandes">Commandes</Link></li>
                <li><Link to="/admin/clientsPhysique">Clients Pysique</Link></li>
            
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