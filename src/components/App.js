import React, { Component } from "react";

import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: "",
    };
  }

  addContact = (newContact) => {
    const contact = {
      id: uuidv4(),
      ...newContact,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const sordList = this.getFilterContacts();

    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm
          valueName={name}
          valueNumber={number}
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter valueFilter={filter} onChange={this.handleChange} />
        <ContactsList contacts={sordList} />
      </Section>
    );
  }
}

export default App;
