import React, { Component } from "react";
import ProfileSnapshot from "./ProfileSnapshot";

class HeaderNavMobile extends Component {
  state = {
    links: ["Skillset", "Projects"],
    linksLeft: ["Skillset"],
    linksRight: ["Projects"],
    profileDisplay: false
  };
  handleOnProfileSelect = event => {
    this.setState({
      profileDisplay: !this.state.profileDisplay
    });
  };
  render() {
    return (
      <div className="flex-column" style={{display:this.props.visible?"flex":"none"}}>
        <div className="flex-row header-nav">
          {this.state.linksLeft.map(linkName => (
            <a
              style={
                this.props.selected === linkName
                  ? {
                      width: `calc(100vw / ${this.state.links.length + 1})`,
                      color: "var(--color4)"
                    }
                  : {
                      width: `calc(100vw / ${this.state.links.length + 1})`
                    }
              }
              className={`nav-link ${linkName
                .toLowerCase()
                .replace(/\s/, "-")}`}
              href={linkName
                .split(" ")
                .map(name => {
                  return name.charAt(0).toUpperCase() + name.slice(1);
                })
                .join("")}
            >
              <span>{linkName}</span>
            </a>
          ))}
          <div
            style={{ height: "100%", position: "relative" }}
          >
            <a className="pgerspach nav-link" href="Home" style={{ color:((this.props.selected==="Home")?"var(--color4)":"var(--color1)")}}>
              <span>P. Gerspach</span>
            </a>
            <ProfileSnapshot
              selected={this.props.selected}
              profileDisplay={this.state.profileDisplay}
            />
          </div>

          {this.state.linksRight.map(linkName => (
            <a
              style={
                this.props.selected === linkName
                  ? {
                      width: `calc(100vw / ${this.state.links.length + 1})`,
                      color: "var(--color4)"
                    }
                  : {
                      width: `calc(100vw / ${this.state.links.length + 1})`
                    }
              }
              className={`nav-link ${linkName
                .toLowerCase()
                .replace(/\s/, "-")}`}
              href={linkName
                .split(" ")
                .map(name => {
                  return name.charAt(0).toUpperCase() + name.slice(1);
                })
                .join("")}
            >
              <span>{linkName}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
export default HeaderNavMobile;
