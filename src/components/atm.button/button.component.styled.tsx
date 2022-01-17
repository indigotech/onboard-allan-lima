import styled from 'styled-components';

interface ButtonStyledProps {
  backgroundColor: string;
  fontSize: number;
  textColor: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  font-weight: normal;
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.textColor};
  border-radius: 10px;
  min-height: 44px;
  min-width: 100px;
`;
