import React, { useEffect, useState } from 'react'
import { useExpense } from '../context/useExpense'

const List = () => {
  const [total, setTotal] = useState(0)
  const {state} = useExpense()

  return (
    <div className='container'>
      <ul className='list'>
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
        <li className='row'>
          <span>Total</span>
          <span>{total}</span>
        </li>
      </ul>
    </div>
  )
}

export default List