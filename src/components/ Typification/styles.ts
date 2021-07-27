import styled from 'styled-components';

export const TypificationStyle = styled.div`
 
  height: 30vh;
  overflow-y: scroll;

  @media print {
    overflow: auto;
    height: 45vh;
  }

  table {
    border-collapse: collapse;

    @media print {
      display: none;
    }

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

  div {
    display: none;
    
    h3 {
      margin: 2rem 0;
    }

   li {
    margin-bottom: 1rem;
   }

    @media print {
      display: block;
    }
  }
`;