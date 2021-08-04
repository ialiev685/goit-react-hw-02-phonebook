import React, { Component } from "react";
import Form from "./Form";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ name: value });
  };

  addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
    };

    this.setState({ name: "" });

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { name } = this.state;
    return (
      <Form
        value={name}
        onSubmit={this.addContact}
        onChange={this.handleChange}
      />
    );
  }
}

export default App;
