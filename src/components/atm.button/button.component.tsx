import { ButtonStyled } from './button.component.styled';

interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
export function Button(props: ButtonProps) {
  const { label, ...others } = props;
  return <ButtonStyled {...others}>{label}</ButtonStyled>;
}
