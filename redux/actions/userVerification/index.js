export const ADD_OTP_PIN = 'ADD_OTP_PIN';
export const ADD_USER = 'ADD_USER';

export function addOTPCode(otpCode) {
  return {
    type: ADD_OTP_PIN,
    otpCode,
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}
