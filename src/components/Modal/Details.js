import React, { useState } from 'react'

const Details = ({ detail, close, setClose }) => {
 console.log('details from Details components', detail)
 const { adresse } = detail
 const { user } = detail
 const { telephone, commune, zone, quartier, avenue, numero } = adresse
 const { nom, prenom } = user
 console.log(
  'details from Details qdresse components',
  telephone,
  commune,
  zone,
  quartier,
  avenue,
  numero
 )
 const { uuid, exigences, date, dateArriver, fraisComission, employe } = detail

 // style={{display:close}}
 return (
  <div className="modalBackground1" style={{ display: close }}>
   <div className="modalContainer1">
    <h1>DETAILS DU COMMANDE</h1>
    <p>Nom du client: {nom}</p>
    <p>Prenom du client: {prenom}</p>
    <p>Télephone du client: {telephone}</p>
    <p>
     Adresse du client:{' '}
     {commune + `,` + zone + `,` + quartier + `,` + avenue + `,` + numero}
    </p>
    <p>Date: {date}</p>
    <p>Date de presentation de l'employe: {dateArriver}</p>
    <p>frais de commission: {fraisComission}</p>
    <p>Exigences du client: {exigences}</p>
    <p>Employe de menage: {employe.nom + ` ` + employe.prenom}</p>

    <button onClick={() => setClose(false)}>Fermer</button>
   </div>
  </div>
 )
}

export default Details
