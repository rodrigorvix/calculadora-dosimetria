import styled from 'styled-components';

export const ParametersPhaseOneStyle = styled.section`
  width: 50%;

  @media(max-width: 980px) {
    width: 100%;
  }
  h2 {
    font-size:1rem;
    margin-bottom: .5rem;
    text-align: center;
  }
  table {
    border-collapse: collapse;
    width: 100%;

    th {
      text-align: left;
      padding: 0.75rem 1rem 0.75rem 0;
      border-bottom: 1px solid black;

      div{
        display: flex;
      }
      &:first-child span {
        margin-right: 0.75rem;
      }
    }
    td {
      padding: 0.75rem 1rem 0.75rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      
    }
  }

`;