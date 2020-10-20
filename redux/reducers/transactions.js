import {TRANSACTION_ERROR, TRANSACTION_SUCCESS} from '../actions/transactions';


const transactionReducer = (state = {}, action) => {
    switch(action.type) {

        case TRANSACTION_SUCCESS: 
            return {
                ...state, transaction: action.data, error: null
            };
        case TRANSACTION_ERROR: 
            return {
                ...state, error: action.error
            }
        default:
             return state;
    }
}


export default transactionReducer;
