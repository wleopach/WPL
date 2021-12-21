
import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class ContatUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section " id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Contáctanos</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-center font-secondary padding-t-30">Queremos ofrecerte nuestros servicios de acuerdo a tus necesidades, contáctanos ahora para recibir asesoría. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="custom-form mt-4 pt-4">
                                    <div id="message"></div>
                                    <AvForm id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                   <AvField type="text" name="name" className="form-control"  placeholder="Nombre*"  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                <AvField type="email" name="email" className="form-control"  placeholder="Correo electrónico*"  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                <AvField type="text" name="enterprise" className="form-control"  placeholder="Empresa*"  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                <AvField type="text"   name="subject" className="form-control"  placeholder="Asunto*"  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea name="comments"  id="comments" rows="4" className="form-control" placeholder="Tu mensaje..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 text-right">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Enviar Mensaje" />
                                                <div id="simple-msg"></div>
                                            </div>
                                        </div>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default ContatUs;


