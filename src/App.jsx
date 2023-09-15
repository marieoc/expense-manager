import { useReducer, useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import './App.css'
import reducer, { initialState } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Form dispatch={dispatch} state={state} />
      <List />
    </>
  )
}

export default App
