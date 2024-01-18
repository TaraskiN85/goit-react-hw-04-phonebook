import React from 'react'
import css from './Contacts.module.css'

export const Contacts = ({contacts, deleteContact}) => {
  
  const handleDeleteContact = (e) => {
    const name = e.currentTarget.name
    // console.log(name)
    deleteContact(name)
  }

  return (
    <div className={css.contacts}>
      <ul className={css.contactsList}>
        {contacts.map(contact => {
          return <li key={contact.id} >
            <div className={css.contactsItem}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button className={css.delete} onClick={handleDeleteContact} name={contact.name}>Delete</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}
