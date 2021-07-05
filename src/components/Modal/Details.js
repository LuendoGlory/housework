import React, { useState, useEffect } from 'react'

const Details = ({ detail, close, setClose }) => {
 console.log('this close', close)
 //  console.log(
 //   'details from Details components',
 //   JSON.parse(JSON.stringify(detail))
 //  )
 //  const [shutOut, setshutOut] = useState(true)
 console.log('details from Details components not stringfy', detail)
 //  const theOne = { ...detail }

 const { user, employe, adresse } = detail

 console.log('this is adresse', adresse)
 console.log('this is user', user)
 console.log('this is employe', employe)
 //  const { telephone, commune, zone, quartier, avenue, numero } = adresse
 //  const { nom, prenom } = user
 //  console.log(
 //   'details from Details qdresse components',
 //   telephone,
 //   commune,
 //   zone,
 //   quartier,
 //   avenue,
 //   numero
 //  )
 const { uuid, exigences, date, dateArriver, fraisComission } = detail
 // style={{display:close}}
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
