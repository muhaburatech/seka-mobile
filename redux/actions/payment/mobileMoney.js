import axios from 'axios';
import { backendUrl } from '../../../constants/server';
import base64 from 'react-native-base64'

// {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         "Authorization": `Basic ${base64.encode('sekaa:0Xjc7k')}`
//     },
// }


export const PAYMENT_REQUEST_SUCCESS = 'PAYMENT_REQUEST_SUCCESS';
export const PAYMENT_REQUEST_ERROR = 'PAYMENT_REQUEST_ERROR';


const paymentOrderSuccess = (data) => {
    return {
        type: PAYMENT_REQUEST_SUCCESS,
        data,
    }
}

const paymentOrderError = (error) => {
    return {
        type: PAYMENT_REQUEST_ERROR,
        error,
    }
}


export const sendMomoPaymentRequest = ( data ) => async dispatch => {
    
    const res = await axios.post(`${backendUrl}/mobilemoney`, data)
    .then( (response) => {
        dispatch(paymentOrderSuccess(response.data))
        return response.data;
    }).catch(err => {
        dispatch(paymentOrderError(err));
        console.log('err from action:', err);
    })
    return res;
}