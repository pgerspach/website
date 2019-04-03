import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
// import IconRow from "../components/IconRow";
import Project from "../components/Project";
import HeaderNavMobile from "../components/HeaderNavMobile";

class EduAndExp extends Component {
  state = {
    profileDisplay: false,
    mobile: false,
    vpwidth: 0,
    vpheight: 0,
    vpratio: 0,
    vpscroll: 0,
    headerVisible: true
  };
  handleScroll = event => {
    this.setState({ vpscroll: window.pageYOffset });
    if (this.state.vpscroll > this.state.vpheight/1.5) {
      this.setState({ headerVisible: false });
    } else {
      this.setState({ headerVisible: true });
    }
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
    const education = [
      {
        name: "University of Notre Dame",
        image:"./images/ndlogo.png",
        description:"B.S Mechanical Engineering| 3.60 GPA"
      },
      {
        name: "Columbia University Engineering Coding Boot Camp",
        image:"./images/columbia.png",
        description:"Certificate of Completion|Full Stack Web Development"
      }
    ];
    const workHistory = [
      {
        name: "WestRock",
        image:"./images/westrock.png",
        description:"Engineering and Management Trainee|Project Lead on waste reduction initiative within a manufacturing plant|Executed successful completion of a boiler replacement and removal project as PM"
      },
      {
        name: "MG Engineering D.P.C",
        image:"./images/mge.png",
        description:"Mechanical Engineering Intern|Drafted HVAC designs using AutoCAD in New York high-rise office floors.|Carefully surveyed job sites, including both demoed and partially demoed spaces, and took comprehensive notes to use in HVAC design"
      },
      {
        name: "Technical Consultant",
        image:"./images/promazo.png",
        description:"Technical Consultant|Directed the technical analysis element of developing a consumer product for a Fortune 500 home appliances company.|Conducted experiments, compiled findings, and wrote a detailed memo making a professional recommendation regarding a technical component of the product"
      }
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Edu And Exp"} visible={this.state.headerVisible} />
        ) : (
          <HeaderNavMobile selected={"Edu And Exp"} />
        )}
        <section className={`page interests-page flex-row`} style={{minWidth:"0"}}>
          <div className="flex-column page-main">
            <PageTitle pageName="Education And Experience" />
            <div>
              <p style={{fontSize:"20px"}}>
                This section is intended to be very similar to what you can find
                on my resume. I list my academic background, as well as my past
                job experiences with brief descriptions. When coupled with the
                content found in the skills section, it should form a more
                complete picture of my professionally diverse past. I have been
                on a journey to discover what I am passionate about, and this
                journey has brought me to the doorstep of the tech industry.
              </p>
            </div>
            <h2>Education</h2>
            {education.map(x => (
              <Project image={x.image?x.image:null}description={x.description} name={x.name} />
            ))}
                        <h2>Experience</h2>
            {workHistory.map(x => (
              <Project contain={true}bodyDirection="column"image={x.image?x.image:null}description={x.description} name={x.name} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
export default EduAndExp;
