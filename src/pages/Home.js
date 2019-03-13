import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import HeaderNavMobile from "../components/HeaderNavMobile";
import ContactForm from "../components/ContactForm";
import CircleImage from "../components/CircleImage";
import IconRow from "../components/IconRow";

class Home extends Component {
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
    const icons = ["ndrecruit", "quote", "fborm"];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Home"} />
        ) : (
          <HeaderNavMobile selected={"Home"} />
        )}
        <div className="page">
          <section className={`home-page flex-${this.state.mobile?"column":"row"}`}>
            <div className="flex-column welcome-wrap">
              <div className="page-welcome">Welcome</div>
              {this.state.mobile?null:(<p className="home-introduction">
                Hello, I'm Patrick Gerspach and welcome to my website! I'm a
                full stack developer with a love for programming. I'm at my
                happiest when I'm solving mind-bending coding problems, hacking
                away on a project, or helping others set up their personal
                websites for the world to see!
              </p>)}
            </div>

            <div
              style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
              className="about flex-column"
            >
              <div
                className="flex-column"
                style={{
                  width: "290px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: this.state.mobile ? "wrap" : "no-wrap",
                  alignSelf: this.state.mobile?"center":"flex-end",
                  marginBottom:"10px"
                }}
              >
                <div>
                  <CircleImage
                    imageId="headshot"
                    imageSource="./images/me.jpg"
                    size={this.state.mobile ? "150px" : "220px"}
                    circle={true}
                  />
                </div>
                <div
                  className="flex-row"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <a
                    href="https://linkedin.com/in/patrick-gerspach-51b770115/"
                    target="blank"
                  >
                    <CircleImage
                      imageId="linkedIn"
                      imageSource="./images/in.png"
                      size={this.state.mobile ? "60px" : "80px"}
                      circle={true}
                    />
                  </a>
                  <a href="https://github.com/pgerspach" target="blank">
                    <CircleImage
                      imageId="github"
                      imageSource="./images/ghub.png"
                      size={this.state.mobile ? "60px" : "80px"}
                      circle={false}
                    />
                  </a>
                </div>

                <p style={{ fontSize: "25px", color: "var(--color2)" }}>
                  pat.gerspach@gmail.com
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "25px",
                    color: "var(--color2)"
                  }}
                >
                  (516) 238-7825
                </p>
              </div>
              {this.state.mobile?(<p className="home-introduction">
                Hello, I'm Patrick Gerspach and welcome to my website! I'm a
                full stack developer with a love for programming. I'm at my
                happiest when I'm solving mind-bending coding problems, hacking
                away on a project, or helping others set up their personal
                websites for the world to see!
              </p>):null}
              
            </div>
          </section>
          <div
            style={{ background: "var(--color5)" }}
            className={`about-passion-wrap ${
              this.state.mobile ? "flex-column" : "flex-row"
            }`}
          >
            <div
              className={`about-passion-side left ${
                this.state.mobile ? "flex-row" : "flex-column"
              }`}
            >
              <div className={`about-passion-icon-wrap`}>
                <IconRow
                  jpg={false}
                  numRows={2}
                  size={`${this.state.mobile ? "130" : "160"}`}
                  radius={"5"}
                  circle={false}
                  icons={icons}
                  shadow={5}
                />
              </div>
            </div>
            <div
              className={`about-passion-side ${
                this.state.mobile ? "flex-row" : "flex-column"
              }`}
              style={{
                color: "var(--color2)",
                padding: `${this.state.mobile ? "20px" : "50px"}`
              }}
            >
              <p>
                With experience in multiple languages and frameworks spanning
                from front end to back end, I am capable of building complete
                web applications with all the bells and whistles to your heart's
                desire.
              </p>
            </div>
          </div>
          <div className="home-divider flex-column">
            <div
              style={{ fontSize: `${this.state.mobile ? "36px" : "40px"}` }}
              className="home-divider-headline"
            >
              Coding with integrity and the resolve to improve.
            </div>
          </div>
          <div
            style={{ background: "var(--color1)" }}
            className={`about-passion-wrap ${
              this.state.mobile ? "flex-column" : "flex-row"
            }`}
          >
            <div
              className={`about-passion-side ${
                this.state.mobile ? "flex-row" : "flex-column"
              }`}
              style={{
                padding: `${this.state.mobile ? "20px" : "50px"}`,
                fontSize: `${this.state.mobile ? "30px" : "34px"}`,
                background: "var(--color1)"
              }}
            >
              <p>
                From the moment I began web development, I made it my mission to
                get better every day. Without any shortcuts or excuses, the only
                way is forward.
              </p>
            </div>
            <div
              className={`about-passion-side right ${
                this.state.mobile ? "flex-row" : "flex-column"
              }`}
            >
              <div className={`about-passion-icon-wrap`}>
                <CircleImage
                  imageId={"servers"}
                  imageSource={`./images/running.png`}
                  size={`100%`}
                  circle={false}
                  radius={0}
                  shadow={false}
                />
              </div>
            </div>
          </div>
          <div className="home-divider flex-column">
            <div
              style={{ fontSize: `${this.state.mobile ? "36px" : "40px"}` }}
              className="home-divider-headline"
            >
              Embracing challenges as a welcome friend.
            </div>
          </div>
          <div
            style={{ background: "var(--color5)" }}
            className={`about-passion-wrap ${
              this.state.mobile ? "flex-column" : "flex-row"
            }`}
          >
            <div
              className={`about-passion-side right ${
                this.state.mobile ? "flex-row" : "flex-column"
              }`}
            >
              <div className={`about-passion-icon-wrap`}>
                <CircleImage
                  imageId={"servers"}
                  imageSource={`./images/gears.png`}
                  size={`100%`}
                  circle={false}
                  radius={0}
                  shadow={false}
                />
              </div>
            </div>
            <div
              className={`about-passion-side ${
                this.state.mobile ? "flex-row" : "flex-column"
              }`}
              style={{
                padding: `${this.state.mobile ? "20px" : "50px"}`,
                fontSize: `${this.state.mobile ? "30px" : "34px"}`,
                background: "var(--color5)"
              }}
            >
              <p>
                With a background in engineering, wrestling problems is a
                comfort zone at this point.
              </p>
            </div>
          </div>
          <ContactForm color="var(--color1)" />
        </div>
      </div>
    );
  }
}
export default Home;
