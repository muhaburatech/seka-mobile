import {PAYMENT_REQUEST_ERROR, PAYMENT_REQUEST_SUCCESS} from '../actions/payment/mobileMoney';


const initialState = {
    isWaiting: true,
    response: {},
    error: null
}
 const momoPayment = (state = initialState, action) => {
    switch(action.type){
        case PAYMENT_REQUEST_SUCCESS:
            return {
                isWaiting: false,
                response: action.data,
                error: null,
            };
        case PAYMENT_REQUEST_ERROR: 
            return {
                isWaiting: false,
                response: null,
                error: action.error
            }
        default:
            return state;
    }
}

export default momoPayment;
