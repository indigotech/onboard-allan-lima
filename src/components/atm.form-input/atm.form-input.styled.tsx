import styled from 'styled-components';

export const FormInputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
`;

export const FormInputStyled = styled.input<{ focused: boolean }>`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 100%;
  &:invalid {
    border:${props => props.focused ? '1px solid red' : ''};
  }
`;

export const FormInputLabelStyled = styled.label`
  font-size: 12px;
  font-weight: normal;
  color: gray;
  margin-bottom: 12px;
`;

export const FormInputErrorStyled = styled.span<{ visible: boolean }>`
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 15px;
  color: red;
  display: ${props => props.visible ? 'block' : 'none'};
`;
