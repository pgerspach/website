import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import IconRow from "../components/IconRow";
import HeaderNavMobile from "../components/HeaderNavMobile";
import Project from "../components/Project";

class Skillset extends Component {
  state = {
    profileDisplay: false,
    mobile: false,
    vpwidth: 0,
    vpheight: 0,
    vpratio: 0,
    vpscroll: 0,
    headerVisible: true
  };
  componentWillMount() {
    this.setState({
      mobile: !(window.innerWidth > 400),
      vpwidth: window.innerWidth,
      vpheight: window.innerHeight,
      vpscroll: window.pageYOffset,
      vpratio: window.devicePixelRatio
    });
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  
  handleScroll = event => {
    this.setState({ vpscroll: window.pageYOffset });
    if (this.state.vpscroll > this.state.vpheight/1.5) {
      this.setState({ headerVisible: false });
    } else {
      this.setState({ headerVisible: true });
    }
  };
  render() {
    const skills = [
      "html",
      "css",
      "js",
      "nodejs",
      "mongo",
      "server",
      "sql",
      "python",
      "api",
      "react",
      "git",
      "scrum"
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Skillset"}  visible={this.state.headerVisible}/>
        ) : (
          <HeaderNavMobile selected={"Skillset"} visible={true} />
        )}
        <section
          className={`page skillset-page flex-row`}
          style={{ minWidth: "0" }}
        >
          <div className="flex-column page-main">
            <PageTitle pageName="Skillset" />
            <div
              style={{
                width: "100%",
                height: `${this.state.mobile ? 4 * 80 + 40 : 3 * 80 + 40}px`
              }}
            >
            <br />
              <IconRow
                numRows={this.state.mobile ? 4 : 3}
                size={"70"}
                icons={skills}
                circle={true}
              />
            </div>
            <div>
              <p style={{fontSize:"20px"}}>
                The past five years have been quite the ride when it comes to
                learning. I attended the University of Notre Dame, where I
                studied mechanical engineering. I took electives in a multitude
                of areas including Systems Programming, which was my first deep
                dive into a programming language with C. In addition to my
                schooling, I held four internships across a broad spectrum of
                fields which taught me a variety of skills. Upon graduating, I
                enrolled in the Columbia University Engineering Coding Boot Camp
                which focuses on full stack web development. This has been both
                the craziest and most enjoyable time in my life, and my passion
                is driving me toward a total devotion to learning and creating. 
                {/* However, I
                cannot forget the invaluable teachings of my experiences, as
                they no doubt contributed to my some of my proudest strengths.
                The icons above display an array of technologies which I have
                had the pleasure of learning within the past year. However, I
                would rather allow my github and projects demostrate my
                capabilities. In this section, I will go over some of the other
                skills I have learned throughout my schooling and my young
                career. */}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Skillset;
