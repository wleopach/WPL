import React, { Component } from "react";

import img1 from "../../images/team/img-1.jpg";
import img2 from "../../images/team/img-2.jpg";
import img3 from "../../images/team/img-3.jpg";
import img4 from "../../images/team/img-4.jpg";
import img5 from "../../images/team/img-5.jpg";
import img6 from "../../images/team/img-6.jpg";
import img7 from "../../images/team/img-7.jpg";
import img8 from "../../images/team/img-8.jpg";

import { Col, Row as div } from "reactstrap";

class About1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <div className="container">
            <div className="row">
              <Col lg="8" className="offset-lg-2">
                <h1 className="section-title text-center">Nuestro equipo</h1>
                <div className="section-title-border margin-t-20"></div>
              </Col>
            </div>
            <div className="container-fluid margin-t-50">
              <div className="row">
                <div className="col">
                  <div className="text-center">
                    <div className="team-wrapper">
                      <div
                        className="team-member"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${img1})`,
                            backgroundSize: "cover",
                            width: "150px",
                            height: "150px",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </div>
                    </div>
                    <h4 className="team-name">Juan Felipe</h4>
                    <h5 className="text-uppercase">Científico de datos</h5>
                    <p className="team-designation">
                      Ph.D en Matemáticas. Experto en algoritmos de
                      clasificación supervisada.{" "}
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="text-center">
                    <div className="team-wrapper">
                      <div
                        className="team-member"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: "cover",
                            width: "150px",
                            height: "150px",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </div>
                    </div>
                    <h4 className="team-name">Laura</h4>
                    <h5 className="text-uppercase">Analista de datos</h5>
                    <p className="team-designation">
                      Profesional en Estadística. Experta en diseño de
                      experimentos y modelos de regresión.{" "}
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="text-center">
                    <div className="team-wrapper">
                      <div
                        className="team-member"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: "cover",
                            width: "150px",
                            height: "150px",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </div>
                    </div>
                    <h4 className="team-name">Yiby</h4>
                    <h5 className="text-uppercase">Ingeniera de ML</h5>
                    <p className="team-designation">
                      Ph.D. en matemáticas. Experta en aprendizaje automático en
                      la nube.{" "}
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className=" text-center">
                    <div className="team-wrapper">
                      <div
                        className="team-member"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${img4})`,
                            backgroundSize: "cover",
                            width: "150px",
                            height: "150px",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </div>
                    </div>
                    <h4 className="team-name">Jose</h4>
                    <h5 className="text-uppercase">Gerente comercial</h5>
                    <p className="team-designation">
                      Desarrollador de software
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col">
                  <div className="text-center">
                    <div className="team-wrapper">
                      <div className="team-member" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div style={{backgroundImage:`url(${img5})`, backgroundSize:"200px", width:"150px", height:"150px", backgroundPosition: "50% 3%"}}></div>
                      </div>
                    </div>
                    <h4 className="team-name">Santiago</h4>
                    <h5 className="text-uppercase">Arquitecto de software</h5>
                    <p className="team-designation">
                      Ingeniero de Sistemas y Computación.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <div className="team-wrapper">
                      <div className="team-member" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div style={{backgroundImage:`url(${img6})`, backgroundSize:"250px", width:"150px", height:"150px", backgroundPosition: "50% 35%"}}></div>
                      </div>
                    </div>
                    <h4 className="team-name">Humberto</h4>
                    <h5 className="text-uppercase">Estadístico senior</h5>
                    <p className="team-designation">
                    M.Sc. en Sistemas. Experto en gerencia de proyectos. 
                    </p>
                  </div>
                </div>                
                <div className="col">
                  <div className="text-center">
                    <div className="team-wrapper">
                      <div className="team-member" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div style={{backgroundImage:`url(${img7})`, backgroundSize:"cover", width:"150px", height:"150px", backgroundPosition: "center"}}></div>
                      </div>
                    </div>
                    <h4 className="team-name">Carlos</h4>
                    <h5 className="text-uppercase">Analista de datos NLP</h5>
                    <p className="team-designation">
                    Ph.D. en Matemáticas.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <div className="team-wrapper">
                      <div className="team-member" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                      <div style={{backgroundImage:`url(${img8})`, backgroundSize:"150px", width:"150px", height:"150px", backgroundPosition: "50% 1%"}}></div>
                      </div>
                    </div>
                    <h4 className="team-name">Alejandra</h4>
                    <h5 className="text-uppercase">Creadora de contenidos</h5>
                    <p className="team-designation">
                      MSc. en Química
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About1;
