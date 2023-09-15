
export const TAG = {
    PRICE: 'price',
    CATEGORY: 'category',
    ALL: 'all'
}

export const ERROR_TYPES = {
    EMPTY_INPUT: 'empty_error',
    INVALID_TYPE: 'invalid_type'
}


export const initialState = {
    total: 0,
    expense: [],
    inputError: {
        tag: '',
        msg: '',
        type: ''
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'error':
            return {
                ...state,
                inputError: {
                    tag: action.payload.tag,
                    msg: action.payload.msg,
                    type: action.payload.type,
                }
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