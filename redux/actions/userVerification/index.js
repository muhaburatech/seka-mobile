export const ADD_OTP_PIN = 'ADD_OTP_PIN';

export function addOTPCode(otpCode) {
  return {
    type: ADD_OTP_PIN,
    otpCode,
  };
}
