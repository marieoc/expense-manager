import React from 'react'

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
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
            onChange={() => {}}
          />
        </label>

        <label>
          Catégorie : 
          <select>
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