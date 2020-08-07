import { ADD_OTP_PIN } from '../actions/userVerification/index';

export default function cart(state = '', { type, otpCode }) {
  switch (type) {
    case ADD_OTP_PIN:
      return otpCode;
    default:
      return state;
  }
}
