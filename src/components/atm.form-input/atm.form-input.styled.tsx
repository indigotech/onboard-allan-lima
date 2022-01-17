import styled from 'styled-components';

export const FormInputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
`;

export const FormInputStyled = styled.input`
  padding: 10px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 100%;
  &[focused='true']:invalid {
    border: 1px solid red;
  }
  &[focused='true']:invalid ~ .FormInputError {
    display: inline-block;
  }
`;

export const FormInputLabelStyled = styled.label`
  font-size: 12px;
  color: rgb(63, 63, 63);
`;

export const FormInputErrorStyled = styled.span<{ visible: boolean }>`
  font-size: 12px;
  margin-bottom: 10px;
  color: red;
  display: none;
`;
