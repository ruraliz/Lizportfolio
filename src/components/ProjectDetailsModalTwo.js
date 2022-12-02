import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModalTwo extends Component {
  render() {
    const tennisTechnolgies =["HTML 5", "CSS 3", "JavaScript"];
    const tennisTitle = ["Guess The Country game"];
    const tennisDescription = ["This is a game in which the player has 10 seconds to guess the name of the country within 4 choices based on the flag that appears on the screen"]
    const tennisurl = ["https://ruraliz.github.io/Guess-the-country-game/"];

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
                src= { require('./../images/project1.gif')}
                alt="projectImages"
                height="377"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }} />
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {tennisTitle}
              {tennisurl ? (
                <a
                  href={tennisurl}
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
            <p className="modal-description">{tennisDescription}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{this.tennisTechnolgies}</ul>
            </div>
          </div>
        </div>

        <li className="list-inline-item mx-3" key={''}>
          <span>
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-html5-plain" style={{ position:"relative", fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {tennisTechnolgies[0]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-css3-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {tennisTechnolgies[1]}
                    </p>
                  </i>
                </div>
                <div className="col">
                  <i className="devicon-javascript-plain" style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {tennisTechnolgies[2]}
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

export default ProjectDetailsModalTwo;