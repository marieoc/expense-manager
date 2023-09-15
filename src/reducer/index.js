
export const initialState = {
    total: 0,
    expense: [],
}


const reducer = (state, action) => {
    switch(action.type) {
        case 'changeValue':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'add':
            return {
                ...state,
                expense: [
                    ...state.expense,
                    action.payload
                ],
            }
        case "delete":
           
        case 'total':
          return {
            ...state,
            total: state.expense.reduce((acc, num) => acc + num.price, 0),
          }
        default:
            return state;
    }
}

export default reducer