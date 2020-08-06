import { backendUrl } from '../constants/server';

export default function(phoneNumber, otp) {
  return fetch(`${backendUrl}/sms`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber,
      otp,
    }),
  });
}
