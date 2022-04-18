export const invlidEmail1 = '1234.com'
export const invalidEmail2 = '@123.com'
export const validPassword = '123456';
export const invalidPassword1 = '1234';
export const invalidPassword2 = 'ty6yt';

export const invalidEmailError = "The email you have entered is not valid";
export const invalidPasswordError = "Password must be at least 6 characters";
export const passwordsDontMatchError = "Passwords do not match";

export let generateValidEmail = (storeInEnv?:boolean) => {
  const emailFirstPart = Math.random().toString(36).slice(2);
  const emailSecondPart = Math.random().toString(36).slice(2);
  if(storeInEnv === true){
    Cypress.env("uniqueEmail", `${emailFirstPart}@${emailSecondPart}.com`);
  }
  return `${emailFirstPart}@${emailSecondPart}.com`
}

export const name = "Keyvan";
export const surname = "Bolorani"
export const telephone ="07850219352";
export const flat = "higher way";
export const houseNumber = "25";
export const street = "sega drive";
export const city = "London";
export const postCode = "se14 4js";
export const dobDay = "1";
export const dobMonth = "January";
export const dobYear = "1993";
export const fullDOB = "1993-01-01";
export const country = "uk"