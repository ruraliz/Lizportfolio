import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import ProjectDetailsModalTwo from "./ProjectDetailsModalTwo";
import ProjectDetailsModalThree from "./ProjectDetailsModalThree";
import ProjectDetailsModalFour from "./ProjectDetailsModalFour";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      detailsModalShowTwo: false,
      detailsModalShowThree: false,
      detailsModalShowFour:false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalShowTwo = (data) => {
      this.setState({ detailsModalShowTwo: true, deps: data });
    };

    let detailsModalShowThree = (data) => {
      this.setState({ detailsModalShowThree: true, deps: data });
    };
    let detailsModalShowFour = (data) => {
      this.setState({ detailsModalShowFour: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    let detailsModalCloseTwo = () =>
      this.setState({ detailsModalShowTwo: false });
    let detailsModalCloseThree = () =>
      this.setState({ detailsModalShowThree: false });
      let detailsModalCloseFour = () =>
      this.setState({ detailsModalShowFour: false });

    const sectionName = "Main Projects";
    const projectTitle = [
      "Guess The Country game",
      "Podlover",
      "Chef It Up",
      "Biba Fund"
    ];
    const projectDate = ["2022"];

    return (
      <>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          style={{ cursor: "pointer" }}
        ></div>
        <section id="portfolio">
          <div className="">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{}</div>
            </div>
            <span className="portfolio-item d-block">
              <div className="cotainer">
                <div className="row text-center">
                  <div className="col">
                    <div
                      className="foto"
                      onClick={() => detailsModalShowThree()}
                    >
                      <div>
                        <img
                          src={require("./../images/home.gif")}
                          alt="projectImages"
                          height="200"
                          style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                            position: "relative",
                          }}
                        />
                        <br />
                        <span
                          className="project-date"
                          style={{ color: "black" }}
                        >
                          {projectDate}
                        </span>
                        <br />
                        <p className="project-title-settings mt-3">
                          {projectTitle[2]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row text-center">
                  <div className="col">
                    <div className="foto" onClick={() => detailsModalShow()}>
                      <div>
                        <img
                          src={require("./../images/podlover.gif")}
                          alt="projectImages"
                          height="200"
                          style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                            position: "relative",
                          }}
                        />
                        <br />
                        <span
                          style={{ color: "black" }}
                          className="project-date"
                        >
                          {projectDate}
                        </span>
                        <br />
                        <p className="project-title-settings mt-3">
                          {projectTitle[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row text-center">
                  <div className="col">
                    <div className="foto" onClick={() => detailsModalShowTwo()}>
                      <div>
                        <img
                          src={require("./../images/project1.gif")}
                          alt="projectImages"
                          height="200"
                          style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                            position: "relative",
                          }}
                        />
                        <br />
                        <span
                          className="project-date"
                          style={{ color: "black" }}
                        >
                          {projectDate}
                        </span>
                        <br />
                        <p className="project-title-settings mt-3">
                          {projectTitle[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row text-center">
                  <div className="col">
                    <div className="foto" onClick={() => detailsModalShowFour()}>
                      <div>
                        <img
                          src={require("./../images/biba.gif")}
                          alt="projectImages"
                          height="190"
                          style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                            position: "relative",
                          }}
                        />
                        <br />
                        <span
                          className="project-date"
                          style={{ color: "black" }}
                        >
                          {projectDate}
                        </span>
                        <br />
                        <p className="project-title-settings mt-3">
                          {projectTitle[3]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <ProjectDetailsModal
              show={this.state.detailsModalShow}
              onHide={detailsModalClose}
              data={this.state.deps}
            />

            <ProjectDetailsModalTwo
              show={this.state.detailsModalShowTwo}
              onHide={detailsModalCloseTwo}
              data={this.state.deps}
            />

            <ProjectDetailsModalThree
              show={this.state.detailsModalShowThree}
              onHide={detailsModalCloseThree}
              data={this.state.deps}
            />

            <ProjectDetailsModalFour
              show={this.state.detailsModalShowFour}
              onHide={detailsModalCloseFour}
              data={this.state.deps}
            />
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
