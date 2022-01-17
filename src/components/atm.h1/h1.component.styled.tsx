import styled from 'styled-components';

interface H1StyledProps {
  fontSize?: number;
  textColor?: string;
  margin?: string;
}

export const H1Styled = styled.h1<H1StyledProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
  color: ${(props) => props.textColor};
  margin: ${(props) => props.margin};
`;

H1Styled.defaultProps = {
  fontSize: 24,
  textColor: 'black',
  margin: '20px 0 20px 0',
};
