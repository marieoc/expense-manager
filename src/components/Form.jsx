import React, { useState } from 'react'
import { useExpense } from '../context/useExpense';

const Form = () => {
  const [formValue, setFormValue] = useState({
    price: '',
    category: ''
  });

  const {dispatch} = useExpense()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'add', payload: formValue })
  }

  return (
    <div className='add_expense_form__wrapper'>
      <form 
        className='add_expense_form'
        onSubmit={handleSubmit}
      >
        <h2>Ajouter une dépense</h2>
        <label>
          Montant : 
          <input
            type={'text'}
            className=''
            onChange={(e) => setFormValue( value => ({...value, price: e.target.value }))}
          />
        </label>

        <label>
          Catégorie : 
          <select
            onChange={(e) => setFormValue( value => ({...value, category: e.target.value }))}
          >
            <option value={''}>-- Veuillez choisir une catégorie</option>
            <option value={'food'}>Alimentation</option>
            <option value={'accomodation'}>Logement</option>
            <option value={'transport'}>Transport</option>
            <option value={'health'}>Santé</option>
            <option value={'education'}>Education</option>
            <option value={'others'}>Autres</option>
          </select>
        </label>

        <div className='btn_wrapper'>
          <input 
            type={'submit'}
            className='btn'
          />
        </div>

      </form>
    </div>
  )
}

export default Form