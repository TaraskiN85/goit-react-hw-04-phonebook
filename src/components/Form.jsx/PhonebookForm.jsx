import React from 'react'
import { nanoid } from 'nanoid'
import css from './PhonebookForm.module.css'

export const PhonebookForm = ({addUser}) => {
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const id = nanoid()
    const name = e.currentTarget.elements.userName.value
    const number = e.currentTarget.elements.userNumber.value

    const profileData = { name, number, id }
    console.log(profileData);
    addUser(profileData);
    e.currentTarget.reset()
  }
  
  return (
    <form className={css.formContainer} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Name</span>
        <input className={css.labelInput} type="text" name="userName" placeholder='John Doe' required />
      </label>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Number</span>
        <input className={css.labelInput} type="tel" name="userNumber" placeholder='555-55-55' required />
      </label>
      <button className={css.button} type='submit'>Add Contact</button>
    </form>
  )
}
