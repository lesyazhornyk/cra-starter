import styled from '@emotion/styled';

export const Table = styled.table`
  background-color: white;
  width: 65%;
  text-align: center;
  border-radius: 5px;
  

  thead {
    background-color: #4cbfc7fe;
    color: white;
    padding: 5px;
    font-weight: bold;
  }

  tr {
    height: 40px;
  }

  tr:nth-of-type(even) {
    background-color: #cccccc;
  }
`;
