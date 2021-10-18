import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 1380px;
  padding: 0 1.25rem; 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media(max-width:500px) {
    font-size: 68%;
  }
  @media print {
    zoom: 58%;
  }
`;