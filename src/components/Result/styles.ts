import styled from 'styled-components';

export const ResultStyle = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 1rem;

  @media(max-width:1300px) {
    font-size: 0.85rem;
  }
  @media(max-width:1024px) {
    text-align: left;
  }
 
`; 