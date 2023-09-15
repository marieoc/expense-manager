import React, { useState } from "react";
import { useExpense } from "../context/useExpense";
import { ERROR_TYPES, TAG } from "../reducer";

const Form = () => {
  const [formValue, setFormValue] = useState({
    price: "",
    category: "",
    id: ''
  });

  const { state, dispatch } = useExpense();

  const handleErrorEmptyInput = () => {
    if (!formValue.price && !formValue.category) {
      dispatch({
        type: "error",
        payload: {
          tag: TAG.ALL,
          msg: "Champs obligatoire",
          type: ERROR_TYPES.EMPTY_INPUT,
        },
      });
      return false
    } else if (!formValue.price) {
      dispatch({
        type: "error",
        payload: {
          tag: TAG.PRICE,
          msg: "Champs obligatoire",
          type: ERROR_TYPES.EMPTY_INPUT,
        },
      });
      return false
    } else if (!formValue.category) {
      dispatch({
        type: "error",
        payload: {
          tag: TAG.CATEGORY,
          msg: "Champs obligatoire",
          type: ERROR_TYPES.EMPTY_INPUT,
        },
      });
      return false
    }
  };

  const handleErrorInvalidType = () => {
    if(isNaN(formValue.price) && formValue.price) {
      dispatch({
        type: "error",
        payload: {
          tag: TAG.PRICE,
          msg: "Veuillez saisir un caractère numérique",
          type: ERROR_TYPES.INVALID_TYPE,
        },
      });
      return false
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If inputs are empty
    const checkIsEmpty = handleErrorEmptyInput();
    const checkIsInvalidType = handleErrorInvalidType();

    if(checkIsEmpty === false){
      return
    }else if(checkIsEmpty && checkIsInvalidType === false){
      return
    }

    await setFormValue(value => ({...value, 
      ...value,
     id: 'id-' + Math.random().toString(36) + Date.now().toString(36),
    }))

    dispatch({
      type: "error",
      payload: {
        tag: '',
        msg: '',
        type: '',
      },
    });
    await dispatch({ 
      type: "add", 
      payload: formValue
    });
    await dispatch({ type: "total" });
    setFormValue((value) => ({...value,
      price: '',
      category: '',
      id: ''
    }))
    return
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <h2 style={{ textAlign: "center" }}>Ajouter une dépense</h2>
      <form className="add_expense_form" onSubmit={handleSubmit}>
        <div className="wrapper-form">
          <label>
            Montant :
            <input
              type={"text"}
              className="input"
              value={formValue.price}
              onInput={(e) =>
                setFormValue((value) => ({
                  ...value,
                  price: e.target.value,
                }))
              }
            />
            {((state.inputError.type === ERROR_TYPES.EMPTY_INPUT &&
              (state.inputError.tag === TAG.PRICE ||
                state.inputError.tag === TAG.ALL)) ||
              state.inputError.type === ERROR_TYPES.INVALID_TYPE) && (
              <span className="error">{state.inputError.msg}</span>
            )}
          </label>

          <label>
            Catégorie :
            <select
              className="input"
              value={formValue.category}
              onInput={(e) =>
                setFormValue((value) => ({
                  ...value,
                  category: e.target.value,
                }))
              }
            >
              <option value={""}>-- Veuillez choisir une catégorie</option>
              <option value={"food"}>Alimentation</option>
              <option value={"accomodation"}>Logement</option>
              <option value={"transport"}>Transport</option>
              <option value={"health"}>Santé</option>
              <option value={"education"}>Education</option>
              <option value={"others"}>Autres</option>
            </select>
            {state.inputError.type === ERROR_TYPES.EMPTY_INPUT &&
              (state.inputError.tag === TAG.CATEGORY ||
                state.inputError.tag === TAG.ALL) && (
                <span className="error">{state.inputError.msg}</span>
              )}
          </label>
        </div>

        <div className="btn_wrapper">
          <input
            type={"submit"}
            className="btn"
            style={{ position: "absolute", bottom: "1rem", padding: "10px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
