import { Spinner } from 'components/atm.spinner/spinner.component';
import { ButtonStyled } from './button.component.styled';

interface ButtonProps {
  label: string;
  type: 'button' | 'submit' | 'reset';
  loading?: boolean;
  onClick?: () => void;
}
export function Button(props: ButtonProps) {
  const { label, loading, ...others } = props;
  return (
    <ButtonStyled backgroundColor='black' fontSize={16} textColor='white' disabled={loading} {...others}>
      {loading ? <Spinner size='small' /> : label}
    </ButtonStyled>
  );
}

Button.defaultProps = { loading: false };
