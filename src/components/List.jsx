import React from 'react'
import { useExpense } from '../context/useExpense'

const List = () => {
  const {state, dispatch} = useExpense()

  return (
    <div className="container">
      <ul className="list">
        <div className="wrapper-scroll">
          <li className="row" id="head-row">
            <span>Catégorie</span>
            <span>Prix</span>
            <span>Supprimer une dépense</span>
          </li>
          <div style={{ marginTop: "25px" }}>
            {state.expense.map((el, index) => (
              <li key={index} className="row">
                <span>{el.category}</span>
                <span>{el.price}</span>
                <span>
                <button 
                    className='btn-trash'
                    onClick={() => console.log(state)}
                  >hello</button>
                  <button 
                    className='btn-trash'
                    onClick={() => dispatch({type: "delete", payload: el.id})}
                  >
                    <svg
                      width="30"
                      height="30"
                      fill="rgb(194, 38, 38)"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.844 6.03a.844.844 0 0 1-.044-.27c0-1.326 3.223-2.4 7.2-2.4 3.977 0 7.2 1.074 7.2 2.4a.846.846 0 0 1-.044.27l-2.021 12.125a2.401 2.401 0 0 1-2.37 2.005H9.234a2.4 2.4 0 0 1-2.368-2.005L4.845 6.03Zm11.868-.828C15.56 4.817 13.893 4.56 12 4.56c-1.896 0-3.562.258-4.711.641-.573.192-.954.393-1.17.56.216.167.597.368 1.17.559 1.15.384 2.815.64 4.71.64 1.897 0 3.561-.258 4.712-.64.572-.192.954-.393 1.17-.56-.216-.168-.598-.368-1.17-.559l.001.001Z"></path>
                    </svg>
                  </button>
                </span>
              </li>
            ))}
          </div>
        </div>
        <li className="row">
          <span>Total</span>
          <span>{state.total}</span>
        </li>
      </ul>
    </div>
  );
}

export default List