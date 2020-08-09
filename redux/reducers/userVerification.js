import { ADD_OTP_PIN, ADD_USER } from '../actions/userVerification/index';

export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_OTP_PIN:
      return Object.assign({}, { ...state, code: action.optCode });
    case ADD_USER:
      return Object.assign({}, { ...state, user: action.user });
    default:
      return state;
  }
}
