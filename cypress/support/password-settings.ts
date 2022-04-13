export const invlidEmail1 = '1234.com'
export const invalidEmail2 = '@123.com'
export const validPassword = '123456';
export const invalidPassword1 = '1234';
export const invalidPassword2 = 'ty6yt';

export const invalidEmailError = "The email you have entered is not valid";
export const invalidPasswordError = "Password must be at least 6 characters";
export const passwordsDontMatchError = "Passwords do not match";

export let generateValidEmail = () => {
  const emailFirstPart = Math.random().toString(36).slice(2);
  const emailSecondPart = Math.random().toString(36).slice(2);

  return `${emailFirstPart}@${emailSecondPart}.com`
}