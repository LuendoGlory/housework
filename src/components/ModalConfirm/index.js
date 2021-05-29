import React from 'react';

const ModalConfirm = ({showModal, children, closeModal}) => {
    /* avenue,numero,quartier,telephone,zone */
    
    return (
        showModal && (
            <div className="modalBackground" onClick={closeModal}>
                <div className="modalContainer">
                        <div className="modalHeader">
                            <h2>VOULEZ-VOUS CHANGER VOTRE ADRESSE?</h2>
                        </div>

                        <div className="modalBody">
                            <p>Veillez choisir</p>
                        </div>

                        <div className="modalFooter">
                            <button className="modalBtn">OUI</button>
                            <button className="modalBtn">NON</button>
                        </div>
                </div>
            </div>
        )
    );
};

export default ModalConfirm;