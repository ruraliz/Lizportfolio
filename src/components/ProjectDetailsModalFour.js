import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModalFour extends Component {
  render() {
    const technolgies =["Python","Javascript", "Django", "postgreSQL", "Bootstrap"];
    const title = ["Biba Fund"];
    const description = [ "Developed website for a team of investors who have an investment fund Biba, that is specialized in investing in small entrepreneurial companies or projects. "]
    const url = ["https://bibafund.herokuapp.com/"];
    const githuburl = ["https://github.com/ruraliz/BibaFund"] 

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>

        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <img
                className="img-thumbnail"
                src= { require('./../images/biba.gif')}
                alt="projectImages"
                height="377"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }} />
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <h4>Github link
            {githuburl ? (
                <a
                  href={githuburl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h4>
            <p className="modal-description">{description}</p>
            <div className="col-md-12 text-center">
              
            </div>
          </div>
        </div>

        <li className="list-inline-item mx-3" key={''}>
          <span>
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-python-plain" style={{ position:"relative", fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "35%" }}>
                      {technolgies[0]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-javascript-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "35%" }}>
                      {technolgies[1]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-django-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "35%" }}>
                      {technolgies[2]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-postgresql-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "35%" }}>
                      {technolgies[3]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-bootstrap-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "35%" }}>
                      {technolgies[4]}
                    </p>
                  </i>
                </div>
              </div>
            </div>
          </span>
        </li>
             
      </Modal>
      
    );
  }
}

export default ProjectDetailsModalFour;