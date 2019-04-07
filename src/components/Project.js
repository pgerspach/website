import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div
        className="project"
        style={{
          boxShadow: "0 0 3px 0px black",
          padding: "10px",
          marginBottom: "30px",
          width:"100%",
          background:"white"
        }}
      >
        <div
          className="project-title"
          style={{ fontSize: "32px", marginBottom: "10px", textAlign:"left" }}
        >
          <span>{this.props.name?this.props.name:"Project Name"}</span>
        </div>
        <div className={`project-body ${this.props.bodyDirection ==="column"?"flex-column":"flex-row"}`}style={this.props.bodyDirection==="column"?null:{justifyContent:"space-around"}}>
          <a href={this.props.link?this.props.link:null} target="blank" style={{alignSelf:"flex-start"}}> 
            {this.props.image ? (
              <img
                alt="project"
                src={this.props.image}
                style={{
                  width: "285px",
                  height: "160px",
                  borderBottom: this.props.border?"2px solid var(--color5)":"none",
                  borderTop: this.props.border?"2px solid var(--color5)":"none",
                  borderRadius: "10px",
                  objectFit:this.props.contain?"contain":null
                }}
              />
            ) : (
              null
            )}
          </a>
          <div className="project-description" style={{alignSelf:"flex-start"}}>
            {this.props.description.split("|").map(par => (
              <p>{par.trim()}</p>
            ))}
            {this.props.githubLink?(<p>{"Link to github: "}<a href={this.props.githubLink}>{this.props.name}</a></p>):null}
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
