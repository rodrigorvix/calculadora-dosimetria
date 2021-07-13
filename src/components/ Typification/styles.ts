import styled from 'styled-components';

export const TypificationStyle = styled.div`
 
  height: 30vh;
  overflow-y: scroll;

  table {
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 0.75rem 1rem 0.75rem 0;
      border-bottom: 1px solid black;
      position: sticky;
      top: 0;
      z-index: 1;
      background: #fff;
    }
    td {
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);
    }
  }
`;