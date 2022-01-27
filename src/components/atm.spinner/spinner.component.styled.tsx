import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpinnerStyled = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid black;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`;
