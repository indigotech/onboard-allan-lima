import styled from 'styled-components';

export const PaginationStyled = styled.div`
  margin-top: 2rem;
  button + button {
    margin-left: 1rem;
  }
`;

export const ButtonPageStyled = styled.button<{ active?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
  background-color: ${(props) => (props.active ? '#000' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover:enabled {
    color: '#fff';
    background-color: ${(props) => (props.active ? '#000' : '#dfdfdf')};
  }
`;

ButtonPageStyled.defaultProps = {
  active: false,
};
