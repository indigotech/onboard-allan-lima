const regexPassword = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.+$)');

export const validateEmail = (emailTarget: EventTarget & HTMLInputElement): boolean => {
    const isEmailValid: boolean = emailTarget.checkValidity();
    
    return isEmailValid;
}

export const validatePassword = (passwordTarget: EventTarget & HTMLInputElement): boolean => {
    const password: string = passwordTarget.value;
    const isPasswordValid: boolean = passwordTarget.checkValidity() && regexPassword.test(password);

    return isPasswordValid;
}
