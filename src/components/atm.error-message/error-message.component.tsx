import { ErrorMessageStyled } from './error-message.styled';

interface ErrorMessageProps {
  label?: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
  return <ErrorMessageStyled>{props?.label}</ErrorMessageStyled>;
}
