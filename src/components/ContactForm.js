import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/submit/contact", {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(res => {
        console.log(this.state);
        this.setState({ name: "", email: "", message: "" });
        if (res === 200) {
          document.alert("Your message has been sent to Patrick!");
        } else {
          document.alert("There was a problem sending your message to Patrick");
        }
        this.setState({ name: "", email: "", message: "" });
      });
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="contact-form flex-column"
        style={{ color: this.props.color || "black" }}
      >
        <label>
          Name
          <input
            name="name"
            type="text"
            className="contact-input contact-input-name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            className="contact-input contact-input-email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            type="text"
            className="contact-input contact-input-message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Why are you reaching out?"
          />
        </label>
        <input
          className="contact-input contact-input-submit"
          onClick={this.handleSubmit}
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
export default ContactForm;
