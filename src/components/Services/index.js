import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    return (
        <div className="boxs_services">
       <h4>{props.userData.prenom } </h4>

        <p> VEILLEZ CHOISIR VOTRE SERVICE POUR TROUVER VOTRE EMPLOYÉ DE MENEGE </p>

        <section className="section-one">
                    
                    <div className="card">
                        <div className="card-header">
                            Babyssiters
                        </div>
                        <div className="card-body">
                                Cliquez sur voir plus en dessous de cette carte pour 
                                voir tous les babyssiter que nous avons chez
                                housework et choisisez le babbyssiter qui vous
                                convient
                        </div>
                        <Link className="cardLink" to="/services/Babyssiteur">
                            <div className="card-footer">
                                Voir plus...
                            </div>
                        </Link>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Domestiques
                        </div>
                        <div className="card-body">
                                Housework vous propose les meilleurs Domestiques
                                de toute la ville, ils sont bien formés avant de
                                vous l'envoyer chez vous à la maison par nos 
                                formateurs. 
                        </div>
                        {/* "Domestique","Babyssiteur","Jardinier" , "Cuisinier","Santinel" */}
                        <Link className="cardLink" to="/services/Domestique">
                            <div className="card-footer">
                                Voir plus...
                            </div>
                        </Link>
                        
                    </div>
                    
                    <div className="card">
                        <div class="card-header">
                            Jardiniers
                        </div>
                        <div className="card-body">
                                Housework vous facilite encore la vie avec les service
                                de jardinage, ce cervices consiste à vous fournir les
                                meilleurs jardinier de toutes sorte.
                        </div>

                        <Link className="cardLink" to="/services/Jardinier">
                             <div className="card-footer">
                                Voir plus..
                              </div>
                        </Link>
                        
                    </div>
                </section>


        <section className="section-one">
                    
                    <div className="card">
                        <div className="card-header">
                            Chef cuisinier
                        </div>
                        <div className="card-body">
                                Pour vos fêtes de mariages, les reunions de toutes sortes, 
                                vos restaurant et pour toutes vos activites, Housework
                                vous propose les meilleurs chefs cuisiniers.
                        </div>
                        <Link className="cardLink" to="/services/Chef_cuisinier">
                            <div className="card-footer">
                                Voir plus..
                            </div>
                        </Link>
                        
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Santinel
                        </div>
                        <div className="card-body">
                            Vous avez la possibilité d'engager vos sentinels selon votre 
                            préférences, notre but est de vous servir et securiser votre
                            maison.
                        </div>
                        <Link className="cardLink" to="/services/Santinel">
                            <div className="card-footer">
                              Voir plus..
                            </div>
                        </Link>
                        
                    </div>
                    
                    <div className="card">
                        <div class="card-header">
                            Coursiers et piscinistes
                        </div>
                        <div className="card-body">
                            Si vous avez personnes chez vous pour faire vos courses ou pour 
                            netoyer votre piscine, vous n'avez qu'à cliquer sur voir plus 
                            pour engager un coursier ou un personne pour prendre soin de 
                            votre piscine.
                        </div>

                        <Link className="cardLink" to="/services/piscinisteAndcoursier">
                            <div className="card-footer">
                              Voir plus..
                            </div>
                        </Link>
                        
                    </div>
                </section>
        </div>
    );
};

export default Services;