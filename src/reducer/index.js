
export const initialState = {
    total: 0,
    expense: [],
    lastAction: ''
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

            }
           
        case "delete":
           
        case 'total':
          
        default:
            return state;
    }
}

export default reducer