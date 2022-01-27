import { useState } from 'react';
import {
  FormInputContainerStyled,
  FormInputErrorStyled,
  FormInputLabelStyled,
  FormInputStyled,
} from './atm.form-input.styled';

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
  minLength?: number;
  maxLength?: number;
}

export function FormInput(props: FormInputProps) {
  const { label, errorMessage, onChange, ...others } = props;
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(false);
  const errorVisible = !valid && focused;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValid(event.target.checkValidity());
    onChange ? onChange(event) : '';
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setValid(event.target.checkValidity());
    setFocused(true);
  };

  return (
    <FormInputContainerStyled>
      <FormInputLabelStyled htmlFor={props.name}>{label}</FormInputLabelStyled>
      <FormInputStyled onBlur={handleBlur} focused={focused} onChange={handleChange} {...others}></FormInputStyled>
      <FormInputErrorStyled visible={errorVisible}>{errorMessage}</FormInputErrorStyled>
    </FormInputContainerStyled>
  );
}
