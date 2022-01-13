import { useState } from 'react';
import './form-input.style.css';

export interface FormInputProps {
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  value?: string | number | string[];
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
  focused?: string;
}

export function FormInput(props: FormInputProps) {
  const { onInputChange, label, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };

  const handleFocus = () => {
    return props.name === 'confirmPassword' && setFocused(true);
  };

  return (
    <div className='FormInput'>
      <label className='FormInput__label' htmlFor={inputProps.name}>{label}</label>
      <input
        className='FormInput__input'
        onChange={onInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        focused={focused.toString()}
        {...inputProps}
      ></input>
      <span className='FormInputError'>{errorMessage}</span>
    </div>
  );
}
