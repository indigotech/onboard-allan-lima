import styled from 'styled-components';

export const UsersListPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  th,
  td {
    border: 1px solid rgb(136, 136, 136);
    padding: 10px;
  }
  tr:nth-child(even) {
    background-color: rgb(241, 241, 241);
  }
  .spinner {
    background-color: red;
  }
`;

export const UsersListTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  
  .TableContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
  }
  
  table {
    min-width: 600px;
  }
`;
