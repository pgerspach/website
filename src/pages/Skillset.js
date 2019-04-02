import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import IconRow from "../components/IconRow";
import HeaderNavMobile from "../components/HeaderNavMobile";
import Project from "../components/Project";

class Skillset extends Component {
  state = {
    profileDisplay: false,
    mobile: false
  };
  componentWillMount() {
    this.setState({
      mobile: !(window.innerWidth > 400)
    });
  }
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
      "react"
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Skillset"} />
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
                height: `${this.state.mobile ? 3 * 70 + 40 : 2 * 70 + 40}px`
              }}
            >
              <IconRow
                numRows={this.state.mobile ? 3 : 2}
                size={"70"}
                icons={skills}
                circle={true}
              />
            </div>
            <div>
              <p>
                The past five years have been a beautiful mess when it comes to
                learning. I attended the University of Notre Dame, where I
                studied mechanical engineering. I took electives in a multitude
                of areas including Systems Programming, which was my first deep
                dive into a programming language with C. In addition to my
                schooling, I held four internships across a broad spectrum of
                fields which taught me a variety of skills. Upon graduating, I
                enrolled in the Columbia University Engineering Coding Boot Camp
                which focuses on full stack web development. This has been both
                the craziest and most enjoyable time in my life, as my passion
                is driving me toward a total devotion to learning. However, I
                cannot forget the invaluable teachings of my experiences, as
                they no doubt contributed to my some of my proudest strengths.
                The icons above display an array of technologies which I have
                had the pleasure of learning within the past year. However, I
                would rather allow my github and projects demostrate my
                capabilities. In this section, I will go over some of the other
                skills I have learned throughout my schooling and my young
                career.
              </p>
              <Project
                description={
                  "I have gained invaluable experience as a project manager over the past few years. I was the PM on a boiler replacement and removal project, and spearheaded a waste-reduction kaizen event. I learned an incredible amount about encouraging team members, effectively allocating resources, and collaborating with one another without conflicts. Anyone who has ever managed a project before understands the frustrations and difficulties, but no doubt would agree that it is one of the most rewarding experiences."
                }
                name={"Project Management"}
                image={""}
                link={"#"}
                border={false}
                bodyDirection="column"
              />
              <Project
                description={"While a student at ND, I had the privilege of taking on a consulting role on two separate occasions. Once was as a social media consultant for two not-for-profit organizations, and the second time was as a technical analysis consultant for a major home appliances company. In both cases I was expected to be an expert in something I knew absolutely nothing about. However, when put in that position there's nothing left to do but to put on a brave face and put in a lot of effort. I learned a lot about taking a challenge head on, and believing that one can accomplish anything if they work hard enough."}
                name={"Specialty Consulting"}
                image={""}
                link={"#"}
                border={false}
                bodyDirection="column"
              />
              <Project
                description={""}
                name={"Conflict Resolution"}
                image={""}
                link={"#"}
                border={false}
                bodyDirection="column"
              />
              <Project
                description={""}
                name={"Team Building"}
                image={""}
                link={"#"}
                border={false}
                bodyDirection="column"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Skillset;
