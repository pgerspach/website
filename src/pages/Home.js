import React, { Component } from "react";
import HomeDesktop from "../components/HomeDesktop";
import HomeMobile from "../components/HomeMobile";

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
    return this.state.mobile ? (
      <HomeMobile />
    ) : (
      <HomeDesktop mobile={this.state.mobile} />
    );
  }
}
export default Home;
