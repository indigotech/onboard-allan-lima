import './error-message.style.css';

interface ErrorMessageProps {
  label?: string;
}

function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div className='ErrorMessage'>
      <p>{props?.label}</p>
    </div>
  );
}

ErrorMessage.defaultProps = { label: '' };

export default ErrorMessage;
