import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'
import { Gmap } from '../Gmap';


class ContactOne extends Component {
    render() {
        return (
            <section className="contact-us-wrap section-padding" id="contact">
                <div className="contact-shape-wrap">
                    <img src={require ("../../assets/img/shape/1.png") } className="shape shape1" alt="" />
                    <img src={require ("../../assets/img/shape/2.png") } className="shape shape2" alt="" />
                    <img src={require ("../../assets/img/shape/3.png") } className="shape shape3" alt="" />
                    <img src={require ("../../assets/img/shape/4.png") } className="shape shape4" alt="" />
                    <img src={require ("../../assets/img/shape/5.png") } className="shape shape5" alt="" />
                    <img src={require ("../../assets/img/shape/6.png") } className="shape shape6" alt="" />
                    <img src={require ("../../assets/img/shape/7.png") } className="shape shape7" alt="" />
                    <img src={require ("../../assets/img/shape/8.png") } className="shape shape8" alt="" />
                    <img src={require ("../../assets/img/shape/1.png") } className="shape shape9" alt="" />
                    <img src={require ("../../assets/img/shape/2.png") } className="shape shape10"  alt="" />
                    <img src={require ("../../assets/img/shape/3.png") } className="shape shape11"  alt="" />
                    <img src={require ("../../assets/img/shape/4.png") } className="shape shape12"  alt="" />
                    <img src={require ("../../assets/img/shape/5.png") } className="shape shape13"  alt="" />
                    <img src={require ("../../assets/img/shape/6.png") } className="shape shape14"  alt="" />
                    <img src={require ("../../assets/img/shape/7.png") } className="shape shape15"  alt="" />
                    <img src={require ("../../assets/img/shape/8.png") } className="shape shape16"  alt="" />
                </div>
                <div className="container">
                <SectionTitle Title="Nous contacter"  Titlep="Nous contacter Vous souhaitez collaborer avec IDEAL CONNECT ? Contactez-nous dès aujourd'hui pour découvrir nos solutions informatiques sur-mesure." />  

                <div className="row" id="contact">
                    <div className="col-md-12 col-lg-6 col-12">
                        <div className="form-wrap">
                            <form action=".#" className="row" id="contact-form" method="POST">
                                <div className="col-12">
                                    <div className="single-input">
                                        <input type="text" id="fname" name="fullname" placeholder="Nom et prénom" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input">
                                        <input type="text" id="email" name="email" placeholder="email" />
                                    </div>
                                    <div className="single-input">
                                        <input type="text" id="subject" name="subject" placeholder="Sujet" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input">
                                        <textarea name="message" id="message" placeholder="message" defaultValue={ ""} />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12 mt-40">
                                    <button type="submit" className="theme-btn f3">soumettre</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 offset-lg-1 col-12 get-contact text-white">
                        <h4>Obtenez une réponse instantanée</h4>
                        <div className="row">
                            <div className="single-contact-info col-sm-6 col-12">
                                <div className="contact-icon">
                                    <i className="far fa-envelope-open-text" />
                                </div>
                                <div className="contact-info">
                                    <p>commercial@ideal-connect.tn</p>
                                    <p>Espace de tunis block H</p>
                                </div>
                            </div> {/* /.single-contact-info */}
                            <div className="single-contact-info col-sm-6 col-12">
                                <div className="contact-icon">
                                    <i className='fal fa-phone'></i>
                                </div>
                                <div className="contact-info">
                                    <p>(216) 22 741 725</p>
                                    <p>(216) 55 313 784</p>
                                </div>
                            </div> {/* /.single-contact-info */}
                        </div>
                        <div className="google-map mt-20">
                            <div id="map">
                                <Gmap/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default ContactOne
