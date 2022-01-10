const regexPassword = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.+$)');

export const validateEmail = (emailTarget: EventTarget & HTMLInputElement): boolean => {
    const emailValid: boolean = emailTarget.checkValidity();
    
    return emailValid;
}

export const validatePassword = (passwordTarget: EventTarget & HTMLInputElement): boolean => {
    const password: string = passwordTarget.value;
    const passwordValid: boolean = passwordTarget.checkValidity() && regexPassword.test(password);

    return passwordValid;
}