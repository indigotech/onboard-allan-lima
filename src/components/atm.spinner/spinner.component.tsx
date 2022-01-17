import { SpinnerContainerStyled, SpinnerStyled } from './spinner.component.styled';

interface SpinnerProps {
  size: 'small' | 'medium' | 'large';
}

export function Spinner(props: SpinnerProps) {
  let size = 20;
  switch (props.size) {
    case 'small':
      size = 20;
      break;
    case 'medium':
      size = 40;
      break;
    case 'large':
      size = 50;
      break;
    default:
      break;
  }
  return (
    <SpinnerContainerStyled>
      <SpinnerStyled size={size} />
    </SpinnerContainerStyled>
  );
}
