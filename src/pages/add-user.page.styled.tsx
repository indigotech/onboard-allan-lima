import styled from 'styled-components';

export const AddUserPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(240, 240, 240);
    padding: 30px 80px;
    border-radius: 20px;
  }

  .Select {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 305px;
    label {
      font-size: 12px;
      color: rgb(63, 63, 63);
    }
    select {
      padding: 10px;
      margin: 10px 0px;
      border-radius: 5px;
      border: 1px solid gray;
      width: 100%;
    }
  }

  button {
    margin-top: 30px;
  }
`;
