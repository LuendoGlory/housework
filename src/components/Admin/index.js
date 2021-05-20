import React from 'react';
import { Link,Switch,Route } from 'react-router-dom'
//import Users from '../Users';
//import PersonnelsHousework from '../PersonnelsHousework'
import Commandes from '../commande';
import EmloyeMenage from '../EmployeMenage';
import Paiement from '../Paiement';
import Employes from '../PersonnelsHousework';
import Users from '../Users';

const Admin = () => {
    return (
      <>
            <Switch>

            <Route path="/users" component={Users}/>
            <Route path="/employemenage" component={EmloyeMenage}/>
            <Route path="/commandes" component={Commandes}/>
            <Route path="/paiement" component={Paiement}/>
            <Route path="/employes" component={Employes}/>
               
            </Switch>
           
               <div className=" ">
            
                     <div className="spaceBoxes">
         
                        <div className="box1">

                        </div>
                        
                        <div className="box2">
                           <Link to="/emloyeMenage"><p><p>Personnels de menage</p></p></Link>
                        </div>
         
         
                        <div className="box3">
                           <p>Commandes</p>
                        </div>
         
                        <div className="box4">
                           <p>Paiement</p>
                        </div>
         
                        <div className="box5">
                           <p>Employés</p>
                        </div>
         
                     </div>
                  
               </div>
                  
          
      </>
      
      
    );
};

export default Admin;