import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";


class ProjectDetailsModal extends Component {
  render() {
    const technologies = ["React", "Bootstrap", "MongoDB", "GraphQL"];
    const title = ["Podlover" ]
    const description = [  "This was a group project, our team created an app where every podcast lover can search for their favorite podcast ir creator. "]
    const url = ["https://podlovers-app.herokuapp.com/"];

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
                src= { require('./../images/podlover.gif')}
                alt="projectImages"
                height="303"
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
            <p className="modal-description">{description}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{this.technologies}</ul>
            </div>
          </div>
        </div>

        <li className="list-inline-item mx-3" key={''}>
          <span>
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-react-plain" style={{ position:"relative", fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {technologies[0]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-bootstrap-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {technologies[1]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-mongodb-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {technologies[2]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-graphql-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {technologies[3]}
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

export default ProjectDetailsModal;