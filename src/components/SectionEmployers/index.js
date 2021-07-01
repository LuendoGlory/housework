import React, {useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from '../Modal';

const Section = ({emp}) => {

const [openModal, setOpenModal] = useState(false)

   const {id,employe}=emp
  const { nom, prenom, telephone, carteIdentite,
     dateNaissance, salaire, description,
      photo, heureService,typeService,carteNational}=employe

      const showModal= id =>{
        setOpenModal(true);
      }

      const closeModal= ()=>{
        setOpenModal(false);
      }

    return (

        <section className="wrapper">
            <figure className="card_section">
                    <div className="card_img"> 
                        <img  src={photo} alt="" />
                        <div className="card_pa">
                            <p className="paragrapheName">{nom}, {prenom}</p>
                        </div>
                    </div>
                    <div className="card_contenu">
                    <div className="card_info">
                        <h5 className="card_service"><stro>{typeService}</stro> </h5>
                        <p className="card_time"> {heureService} </p>
                        <p className="card_prix"> fbi:{salaire}/mois</p>
                    </div>

                    <div className="card_button">
                        <Link className="card_btn" onClick={()=>showModal(description)}  >Voir plus</Link>
                        <Link className="card_btn" to={`/commandes/${typeService}/${id}`} >Engager</Link>
                        
                    </div>
                        
                    </div>
            </figure>

            <Modal showModal={openModal} closeModal={closeModal}>
                <div className="modalHeader">
                    <h2>{nom+` `+prenom }</h2>
                </div>

                <div className="modalBody">
                    {description}
                </div>

                <div className="modalFooter">
                    <button className="modalBtn">Fermer</button>
                </div>
            </Modal>
        </section>
    );
};

export default Section;