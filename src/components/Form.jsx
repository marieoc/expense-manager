import React, { useState } from 'react'
import { useExpense } from '../context/useExpense';
import { ERROR_TYPES } from '../reducer';

const Form = () => {
  const [formValue, setFormValue] = useState({
    price: '',
    category: ''
  });

  const { state, dispatch } = useExpense()

  const handleSubmit = (e) => {
    e.preventDefault();

    // If inputs are empty
    if (!formValue.price || !formValue.category) {
      return dispatch({ type: 'error', 
        payload: { 
          msg: 'Champs obligatoire', 
          type: ERROR_TYPES.EMPTY_INPUT 
        }});
    
    
    // If price input is not a number
    } else if (typeof formValue.price !== 'number') {
      return dispatch({ type: 'error',
        payload: { 
          msg: 'Veuillez saisir un caractère numérique', 
          type: ERROR_TYPES.INVALID_TYPE 
        } })
    }


    dispatch({ type: 'add', payload: formValue })
    dispatch({ type: 'total' })
  }

  return (
    <div className='container' style={{position: 'relative'}}>
      <h2 style={{textAlign: 'center'}}>Ajouter une dépense</h2>
      <form 
        className='add_expense_form'
        onSubmit={handleSubmit}
      >
        <div className='wrapper-form'>
          <label>
            Montant : 
            <input
              type={'text'}
              className='input'
              onChange={(e) => setFormValue( value => ({...value, price: parseInt(e.target.value) }))}
            />
            {
              state.inputError.type && <span>{state.inputError.msg}</span>
            }
          </label>

          <label>
            Catégorie : 
            <select
              className='input'
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
            {
              state.inputError.type === ERROR_TYPES.EMPTY_INPUT && <span>{state.inputError.msg}</span>
            }
          </label>
        </div>

        <div className='btn_wrapper'>
          <input 
            type={'submit'}
            className='btn'
            style={{position: 'absolute', bottom: '1rem', padding: '10px'}}
          />
        </div>

      </form>
    </div>
  )
}

export default Form