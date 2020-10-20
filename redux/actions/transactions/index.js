import axios from 'axios';
import { backendUrl } from '../../../constants/server';


export const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';
export const TRANSACTION_ERROR = 'TRANSACTION_ERROR';


const transactionSuccess = (data) => {
    return {
        type: TRANSACTION_SUCCESS,
        data
    }
};

const transactionError = (error) => {
    return {
        type: TRANSACTION_ERROR,
        error
    }
}


export const addTransaction = input => async dispatch => {
    const res = await axios.post(`${backendUrl}/transactions`, input)
    .then(response => {
        dispatch(transactionSuccess(response.data));
        return response.data;

    }).catch(err => {
        console.log('err:', err.message);
        dispatch(transactionError(err));
        return err;
    })

    return res;
}