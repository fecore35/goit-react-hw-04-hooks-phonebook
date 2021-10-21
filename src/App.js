import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const localContacts = localStorage.getItem("phonebook");
    const parsContacts = JSON.parse(localContacts);
    if (parsContacts) {
      this.setState({
        contacts: parsContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("phonebook", JSON.stringify(this.state.contacts));
    }
  }

  handlerChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSaveContact = (newContact) => {
    const { contacts } = this.state;
    const newContactName = newContact.name.toUpperCase();

    const knownContact = contacts.find(
      ({ name }) => name.toUpperCase() === newContactName
    );

    if (knownContact) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  visibleContacts = () => {
    const search = this.state.filter.toUpperCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(search)
    );
  };

  deleteContact = (event) => {
    let deleteID = event.currentTarget.dataset.id;

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => {
        return id !== deleteID;
      }),
    }));
  };

  render() {
    const { filter } = this.state;
    const contactsList = this.visibleContacts();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSave={this.onSaveContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} handlerChange={this.handlerChange} />
        <ContactList list={contactsList} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
