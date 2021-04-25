import React from 'react';
import {Link } from 'react-router-dom';

const Leanding = () => {

    
    return (
        
        <main className="welcomePage">
            
            <div className="leftBox">
            <Link className="btn-welcome" to="/login">COMMENCER</Link>
            <p className="sipleTitle">Cliquez sur <strong>COMMENCER</strong> pour trouver vos employés
            de services de ménage en sécurité. HOUSEWORK vous facilite la vie en trouvant des solutions
            direct et efficace en quelques minutes seulement, nous vous offrons plusieurs services comme:
            jardinièrie, babbysiting, des coursiers, un services de cleaning de vos appartements ou entreprises,
            des domestiques bien formés </p>
            </div>

         
            
        </main>

           
        

        
        
        
    );
};

export default Leanding;