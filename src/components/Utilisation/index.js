import React from 'react';
import {Link} from 'react-router-dom'

const Utilisation = () => {
    return (
        <div className="wrapper">
            <h1 className="utilisation"> Guite d'utilisation</h1>
            <h3>1. Authentification</h3>
            <p>
                Pour avoir accès aux services proposés par Housework vous devez cliquer sur le bouton
                <strong ><Link to="/"> COMMENCER </Link></strong> se trouvant sur la page d'accueil pour vous connecter. <br />
                Si vous n'avez pas un compte sur Housework vous devez créer un compte pour bien profiter de cette application. <br />
                Si lors de votre dernière connexion vous n'étiez pas déconnecter, vous devez cliquer sur le menu <strong>Services</strong> en haut pour acceder directement aux services.<br />

            </p>

            <h3>2. Comment choisir son employé de ménage?</h3>
            <p>
                Si vous étais déjà conncté vous pouvez directement choisir un des services que vous voulez
            </p>


        </div>
    );
};

export default Utilisation;