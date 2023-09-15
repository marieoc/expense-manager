import {createContext, useContext, useReducer} from "react";
import reducer, { initialState } from "../reducer";


const ExpenseContext = createContext({})

export const useExpense = () => {
    return useContext(ExpenseContext)
}

const ExpenseProvider = ({children}) => {
    const context = ProvideExpenseContext()
    return <ExpenseContext.Provider value={context}>
        {children}
    </ExpenseContext.Provider>
}

const ProvideExpenseContext = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return {
        state,
        dispatch
    }
}

export default ExpenseProvider;