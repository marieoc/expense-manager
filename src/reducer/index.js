
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
            console.log(action.payload)
            return {
                ...state,
                expense: [
                    ...state.expense,
                    {
                        price: parseInt(action.payload.formValue.price),
                        category: action.payload.formValue.category,
                        id: 'id-' + Math.random().toString(36).substring(2) + Date.now().toString(36),
                    }
                ],
            }
            case "delete":
                console.log(action.payload)
                return {
                    ...state,
                    expense: state.expense.filter((el) => el.id !== action.payload)
                }
           
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