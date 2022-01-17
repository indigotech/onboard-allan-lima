export const REGEX_PASSWORD = new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/).toString().replaceAll('/', '');
export const REGEX_PHONE_NUMBER = new RegExp(/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/)
  .toString()
  .replaceAll('/', '');
