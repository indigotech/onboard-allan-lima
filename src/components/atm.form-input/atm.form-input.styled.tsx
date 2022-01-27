import styled from 'styled-components';

export interface FormInputStyledProps {
  focused: boolean;
}

export const FormInputStyled = styled.div<FormInputStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;

  label {
    font-size: 12px;
    font-weight: normal;
    color: gray;
    margin-bottom: 12px;
  }

  input {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid gray;
    width: 100%;
    &:invalid {
      border: ${(props) => (props.focused ? '1px solid red' : '')};
    }
  }
`;

export interface FormInputErrorStyledProps {
  visible: boolean;
}

export const FormInputErrorStyled = styled.span<FormInputErrorStyledProps>`
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 15px;
  color: red;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;
