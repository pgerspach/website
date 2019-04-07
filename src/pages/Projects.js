import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import Project from "../components/Project";
import HeaderNavMobile from "../components/HeaderNavMobile";

class Projects extends Component {
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
    if (this.state.vpscroll > this.state.vpheight / 1.5) {
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
    const projects = [
      {
        name: "The Baseball API",
        description: `The Baseball API is a RESTful API for accessing basic baseball statistics over HTTP.|Before beginning this project, I had only built web apps using node.js. I desired to learn python and its frameworks, and so I chose to build The Baseball API using Django. The data was taken from Sean Lahman's Baseball Database, which bosts an impressive collection of stats from 1871 through 2018. I imported the data from csv format into a heroku PostgreSQL db; unfortunately I have to upgrade to a paid plan which allows up to 1,000,000 rows, so not a lot of data is available at the moment. However, I am working on adding new endpoints and increasing querying ability, and will upgrade or host on a different site when I feel the API is complete enough.`,
        image: "./images/thebaseballapi.png",
        link: "https://thebaseballapi.herokuapp.com",
        githubLink:"https://github.com/pgerspach/the-baseball-api"
      },
      {
        name: "encontro",
        description:
          "encontro is an interactive, agenda-focused meeting app which allows an organization to host more effective meetings with increased efficiency and effectiveness.|We noticed that there was a problem with how meetings are typically run. Discussions get off-topic, items are left undiscussed, attendee participation is too varied, and, worst of all, the meeting may be totally forgotten. We attempted to solve this problem with an intuitive web application which schedules, hosts, and saves meeting data.|A user can join an organization, and then host/join meetings, chat, take notes, raise silent concerns on an item, etc. and then revisit everything from that meeting at a later date.|This project is a collaborative effort with 3 other team members, and is a work in progress. We continue to bug-fix and add features every day, so please feel free to revisit the site often!",
        image: "./images/encontro.png",
        link: "https://encontro.herokuapp.com",
        githubLink:"https://github.com/robsookim/encontro"
      },
      {
        name: "Quote",
        description:
          "Quote is a full stack project I've been working on and off for a few months or so. The idea is to be a dedicated and intimate platform for sharing moments through quotes. Friends can post things said by their friends either publicly or in groups, and have them witnessed or denied. Approved quotes land on the speaker's own quote page. | Node.js and Express.js are used to set up the server and routing, while Sequelize.js is used with MySQL to store user information. User authentication is done through Google Firebase, which provides the uuid for accessing database information. Finally, React is used to build the front-end. | This project is a work in progress and changes every day.",
        image: "./images/quote.png",
        link: "https://github.com/pgerspach/Quote-App"
      },
      {
        name: "College Football Recruiting",
        description:
          "As national signing day approached, I developed an interest in the relationship between a team's recruiting ranking and their performance by year. I wanted to see if there were any clear trends and if recruiting was any kind of indicator of a team's success, whether leading or lagging. |The first order of business for this project was gathering the data. I decided to scrape rivals.com for the recruiting data, and teamrankings.com for the win/loss records.| I wanted to test my regular expression skills on this project, and so I scraped all the data with standard regular expressions. This proved challenging, but incredibly rewarding when everything worked. For loading the html, I used npm's 'request' module for teamrankings.com, while I was forced to use phantom.js for rivals.com as their content populates after the page loads.| Once I gather the data, I write it all into a JSON file which is read by my server. The server sets up the routes, and provides all of the team names to the front end to create the dropdown menu. A user then selects a team for which it wants data, and the server responds with all the data which is graphed using plotly.js.",
        image: "./images/recruit.png",
        link: "https://github.com/pgerspach/Recruit"
      }
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Projects"} visible={this.state.headerVisible} />
        ) : (
          <HeaderNavMobile selected={"Projects"} visible={true} />
        )}
        <section
          className={`page projects-page flex-row`}
          style={{ minWidth: "0" }}
        >
          <div className="flex-column page-main">
            <PageTitle pageName="Projects" />
            <div>
              <p style={{ fontSize: "20px" }}>
                Over the past six months, I have worked tirelessly to not only
                learn, but to also create. I have put a great deal of effort
                into homework assignments, group projects, and, more recently,
                personal projects. This will be a relatively in-depth look at
                some of my favorite creations.
              </p>
            </div>
            {projects.map(project => (
              <Project
                description={project.description}
                name={project.name}
                image={project.image}
                link={project.link}
                border={true}
                bodyDirection="column"
                githubLink = {project.githubLink?project.githubLink:null}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
export default Projects;
