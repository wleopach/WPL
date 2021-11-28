import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

//Layout css
import '../css/colors/yellow.css';

import Particles from 'react-particles-js';

// Layouts
import Header from './Layouts/header';

import FooterAlt from './Layouts/footer-alt';

// Shared
import About from './Shared/about';
import Services from './Shared/services';
import About1 from './Shared/about1';
import ContactUs from './Shared/contact-us';

// Modal Video 
import '../../node_modules/react-modal-video/scss/modal-video.scss';



class Index9 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('sticky-dark');
            document.getElementById('is-sticky').classList.remove('is-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <Header />

                {/* Home Section */}
                <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="">
                        <div className="">
                            <div className="container slidero">
                                <Row>
                                    <Col lg="8" className="offset-lg-2 text-white text-center">
                                        <h4 className="home-small-title">Análisis de datos</h4>
                                        <h1 className="home-title">Especializados en procesamiento del lenguaje natural</h1>
                                        <p className="padding-t-15 home-desc mx-auto">Ofrecemos servicios tecnológicos y estadísticos. Nos enfocamos en el procesamiento de lenguaje natural, rama de la inteligencia artificial que ayuda a las computadoras a entender, interpretar y manipular el lenguaje humano.</p>
                                      </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                     
                    <Particles style={{ position: "absolute" }}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 200
                                },
                                "size": {
                                    "value": 3
                                }

                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />

                </section>

                {/* Services */}
                <Services />

                {/* About Us */}
                <About1 />

                {/* ContactUs */}
                <ContactUs />

                {/* Footer Alt */}
                <FooterAlt />

            </React.Fragment >
        );
    }
}

export default Index9;


