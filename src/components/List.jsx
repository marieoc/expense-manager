import React from 'react'
import { useExpense } from '../context/useExpense'

const List = () => {
  const {state} = useExpense()

  return (
    <div className='container'>
      <ul className='list'>
        <div className='wrapper-scroll'>
          <li className='row' id='head-row'>
            <span>Catégorie</span>
            <span>Prix</span>
          </li>
          <div style={{marginTop: '25px'}}>
            {state.expense.map((el, index) => (<li key={index} className='row'>
              <span>{el.category}</span>
              <span>{el.price}</span>
            </li>))}
          </div>
        </div>
        <li className='row'>
          <span>Total</span>
          <span>{state.total}</span>
        </li>
      </ul>
    </div>
  )
}

export default List