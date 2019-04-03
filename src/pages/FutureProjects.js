import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import HeaderNavMobile from "../components/HeaderNavMobile";
import Project from "../components/Project";

class FutureProjects extends Component {
  handleScroll = event => {
    this.setState({ vpscroll: window.pageYOffset });
    if (this.state.vpscroll > this.state.vpheight / 1.5) {
      this.setState({ headerVisible: false });
    } else {
      this.setState({ headerVisible: true });
    }
  };

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
  render() {
    const fps = [
      {
        name: "Collab",
        image: null,
        description:
          "A collaborative music site which allows users to share riffs, melodies, and lyrics, and work together with other artists to make music.|I want to build the back-end of this project in python for two reasons: |1) Python is a language I've started learning and I really want to dive deep into it and do some cool things|2) Python has some awesome libraries for analyzing audio which will be great for this application"
      },
      {
        name: "encontro mobile",
        image: null,
        description:
          "If you have a look at my projects tab, you will find encontro, which is an agenda and notes focused meeting app. Although the web app is far from complete, I have started to think about developing a mobile application for encontro.|I want to either build encontro mobile with React Native, which is what is used for the website, or with swift to develop for ios. "
      }
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Future Projects"}  visible={this.state.headerVisible}/>
        ) : (
          <HeaderNavMobile selected={"Future Projects"} />
        )}
        <section
          className={`page future-projects-page flex-row`}
          style={{ minWidth: "0" }}
        >
          <div className="flex-column page-main">
            <PageTitle pageName="Future Projects" />

            {fps.map(x => (
              <Project
                image={x.image ? x.image : null}
                description={x.description}
                name={x.name}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
export default FutureProjects;
