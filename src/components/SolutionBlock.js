import React, { Component  } from 'react'
import SectionTitle from './SectionTitle'


class SolutionBlock extends Component {
    constructor() {
        super();
        this.style = {display: "none"};
      }
      setDisplay()
      {
        if (this.style === {display: "block"}) {
            console.log("works")
            this.style=  {display: "none"};
            
            
        }
        else
        {this.style=  {display: "block"}
        console.log("works2")};
      }
    render() {
        return (
            <section className="content-block-wrap section-padding pb-130" id="services">
                <div className="container">
                    
                <SectionTitle Title="Nos Solutions"  Titlep="IDEAL CONNECT fournit de nombreuses solutions informatiques complètes et innovantes. Nos experts travaillent en collaboration avec nos clients pour leur offrir, de manière efficace, des solutions sur-mesure qui répondent à chacun de leurs besoins. Prenez rendez-vous avec l'un de nos consultants pour découvrir comment nous pouvons vous aider." />  
                <div className="row flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">POINTAGE, CONTROLE D'ACCEES ET SECURITE ELECTRONIQUE</span>
                                <h2>Solution 1</h2>
                                <p>Intégrateur de systèmes de sécurité électronique et prestataire de services, la société IDEAL CONNECT propose à ses clients des solutions globales de sécurité, de télésurveillance, vidéo protection. forte de l’expérience de son équipe multidisciplinaire ,IDEAL CONNECT assure la conception, l’installation et l’exploitation des solutions de protection contre l’intrusion .</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img4.jpg") } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img4.jpg") } alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <span className="top-title">POINTAGE, CONTROLE D'ACCEES ET SECURITE ELECTRONIQUE</span>
                                <h2>Solution 2</h2>
                                <p>Intégrateur de systèmes de sécurité électronique et prestataire de services, la société IDEAL CONNECT propose à ses clients des solutions globales de sécurité, de télésurveillance, vidéo protection. forte de l’expérience de son équipe multidisciplinaire ,IDEAL CONNECT assure la conception, l’installation et l’exploitation des solutions de protection contre l’intrusion .</p>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">POINTAGE, CONTROLE D'ACCEES ET SECURITE ELECTRONIQUE</span>
                                <h2>Solution 3</h2>
                                <p>Intégrateur de systèmes de sécurité électronique et prestataire de services, la société IDEAL CONNECT propose à ses clients des solutions globales de sécurité, de télésurveillance, vidéo protection. forte de l’expérience de son équipe multidisciplinaire ,IDEAL CONNECT assure la conception, l’installation et l’exploitation des solutions de protection contre l’intrusion .</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img4.jpg") } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                    <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img4.jpg") } alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <span className="top-title">POINTAGE, CONTROLE D'ACCEES ET SECURITE ELECTRONIQUE</span>
                                <h2>Solution 4</h2>
                                <p>Intégrateur de systèmes de sécurité électronique et prestataire de services, la société IDEAL CONNECT propose à ses clients des solutions globales de sécurité, de télésurveillance, vidéo protection. forte de l’expérience de son équipe multidisciplinaire ,IDEAL CONNECT assure la conception, l’installation et l’exploitation des solutions de protection contre l’intrusion .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SolutionBlock
