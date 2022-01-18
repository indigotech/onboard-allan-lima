import './user-detail.style.css';

interface UserDetailProps {
  label: string;
  field?: string;
}

export function UserDetail(props: UserDetailProps) {
  return (
    <p className='Detail'>
      {props.label}
      <span className='Detail__Field'>{props.field}</span>
    </p>
  );
}
