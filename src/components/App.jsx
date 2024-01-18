import React, { useEffect, useState } from "react";

import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import {Contacts} from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

import css from './App.module.css';

export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('phonebook')) || [])
  const [filter, setFilter] = useState('')
  
  useEffect(() => { 
      localStorage.setItem("phonebook", JSON.stringify(contacts))
  }, [contacts])

  const addUser = (formData => {
    const isDuplicate = contacts.some(contact => contact.name === formData.name)
    
    if (isDuplicate) {
      alert(`${formData.name} is already in contacts.`)
      return
    }

    setContacts([...contacts, formData])
  })

  const handleSearch = (searchData => setFilter(searchData))

  const handleDelete = (name) => {
    setContacts(contacts.filter(contact => contact.name !== name))
  }

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <PhonebookForm addUser={addUser} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter
        value={filter}
        dataSearch={handleSearch}
      />
      <Contacts contacts={filteredContacts} deleteContact={handleDelete} />
    </div>
  )
}
