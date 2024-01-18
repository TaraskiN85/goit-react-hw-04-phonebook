import { Component } from "react";
import css from './App.module.css';

import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import {Contacts} from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    console.log("Mount:", this.state.contacts)
    if (localStorage.getItem('phonebook')) {
      this.setState({contacts: JSON.parse(localStorage.getItem('phonebook'))})
    }
  }
  
  componentDidUpdate() {
    localStorage.setItem("phonebook", JSON.stringify(this.state.contacts))
    console.log("Upd:", this.state.contacts)
  }

  addUser = (formData => {
    const isDuplicate = this.state.contacts.some(contact => contact.name === formData.name)
    
    if (isDuplicate) {
      alert(`${formData.name} is already in contacts.`)
      return
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, formData]
      }
    })
  })

  handleSearch = (searchData => {
    this.setState({filter: searchData})
  })

  handleDelete = (name) => {
    this.setState({contacts: this.state.contacts.filter(contact => contact.name !== name)})
  }
  
  render() {

    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    
    return (
      <div className={css.phonebook}>
        
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <PhonebookForm addUser={this.addUser} />
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleSearch={this.handleSearch}
        />
        <Contacts contacts={filteredContacts} deleteContact={this.handleDelete} />
    </div>
    );
  }
};
