import { H1Styled } from './h1.component.styled';

export interface H1Props {
  text: string;
}

export function H1(props: H1Props) {
  const { text } = props;
  return <H1Styled>{text}</H1Styled>;
}
