import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerStyled = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid red;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`;
