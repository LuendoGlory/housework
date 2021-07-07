import React, { useState, useEffect } from 'react'

const Details = ({ detail, close, setClose }) => {
 console.log('the detail out here Detail line 4', detail)

 //  const theOne = { ...detail }

 const {
  uuid,
  idUser,
  idEmployeMenage,
  exigences,
  date,
  dateArriver,
  fraisComission,
  user,
  employe,
  adresse,
 } = detail

 return (
  <div className="modalBackground1" style={{ display: close }}>
   <div className="modalContainer1">
    <h1>DETAILS DU COMMANDE</h1>
    <p>Nom du client: babu</p>
    <p>Prenom du client: bebi</p>
    <p>Télephone du client:898988989181</p>
    {/* <p>
     Adresse du client:{' '}
     {commune + `,` + zone + `,` + quartier + `,` + avenue + `,` + numero}
    </p> */}
    <p>Date: {date}</p>
    <p>Date de presentation de l'employe: {dateArriver}</p>
    <p>frais de commission: {fraisComission}</p>
    <p>Exigences du client: {exigences}</p>
    {/* <p>Employe de menage: {employe.nom + ` ` + employe.prenom}</p> */}

    <button
     onClick={() => {
      close = false
     }}
    >
     Fermer
    </button>
   </div>
  </div>
 )
}

export default Details
