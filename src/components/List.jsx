import React, { useState } from 'react'

const List = () => {
  const [total, setTotal] = useState(0)
  const expenses = [
    {
      price: 50,
      category: 'Vêtements'
    },
    {
      price: 580,
      category: 'Impôt'
    },
    {
      price: 86,
      category: 'Essences'
    }
  ]

  return (
    <div className='container'>
      <ul className='list'>
        <li className='row' id='head-row'>
          <span>Prix</span>
          <span>Catégorie</span>
        </li>
        <div style={{marginTop: '25px'}}>
          {expenses.map((expense, index) => (<li key={index} className='row'>
            <span>{expense.price}</span>
            <span>{expense.category}</span>
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