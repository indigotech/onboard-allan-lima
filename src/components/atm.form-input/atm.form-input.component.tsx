import { useState } from 'react';
import { FormInputContainerStyled, FormInputErrorStyled, FormInputLabelStyled, FormInputStyled } from './atm.form-input.styled';

export interface FormInputProps {
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  value?: string | number | string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
  focused?: string;
}

export function FormInput(props: FormInputProps) {
  const { label, errorMessage, ...others } = props;
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);
  const errorVisible = !valid && focused;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValid(event.target.checkValidity());
    props.onChange ? props.onChange(event) : '';
  }

  const handleBlur = () => {
    setFocused(true);
  };

  const handleFocus = () => {
    return props.name === 'confirmPassword' && setFocused(true);
  };

  return (
    <FormInputContainerStyled>
      <FormInputLabelStyled htmlFor={props.name}>{label}</FormInputLabelStyled>
      <FormInputStyled
        onBlur={handleBlur}
        onFocus={handleFocus}
        focused={focused.toString()}
        {...others}
      ></FormInputStyled>
      <FormInputErrorStyled visible={valid}>{errorMessage}</FormInputErrorStyled>
    </FormInputContainerStyled>
  );
}
