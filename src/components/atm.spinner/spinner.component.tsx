import { SpinnerContainerStyled, SpinnerStyled } from './spinner.component.styled';

type SpinnerSize = 'small' | 'medium' | 'large';
interface SpinnerProps {
  size: SpinnerSize;
}

const spinnerSize: Record<SpinnerSize, number> = { small: 20, medium: 40, large: 50 };

export function Spinner(props: SpinnerProps) {
  const size = spinnerSize[props.size] ?? 20;
  return (
    <SpinnerContainerStyled>
      <SpinnerStyled size={size} />
    </SpinnerContainerStyled>
  );
}
