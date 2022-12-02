import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModalThree extends Component {
  render() {
    const technolgies =["CSS","Javascript", "EJS", "postgreSQL", "Bootstrap"];
    const title = ["Chef It Up"];
    const description = [ "Created recipe search app to facilitate ease of searching for recipes based on keywords."]
    const url = ["https://chef-it-up-1.herokuapp.com"];
    const githuburl = ["https://github.com/ruraliz/Project2_Chef_It_Up"] 

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
                src= { require('./../images/home.gif')}
                alt="projectImages"
                height="377"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }} />
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {title}
              <h4>Github Link{githuburl}</h4>
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
              
            </div>
          </div>
        </div>

        <li className="list-inline-item mx-3" key={''}>
          <span>
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-css3-plain" style={{ position:"relative", fontSize: "300%" }}>
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
                  <i className="devicon-ejs-plain" style={{ fontSize: "300%" }}>
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

export default ProjectDetailsModalThree;