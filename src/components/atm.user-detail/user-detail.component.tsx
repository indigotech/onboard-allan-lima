import { UserDetailStyled } from './user-detail.component.styled';

interface UserDetailProps {
  label: string;
  field?: string;
}

export function UserDetail(props: UserDetailProps) {
  return (
    <UserDetailStyled>
      {props.label}
      <span>{props.field}</span>
    </UserDetailStyled>
  );
}
