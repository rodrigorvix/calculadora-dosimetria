import styled from 'styled-components'; 

export const CircleQualifierStyle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  float: left;
  margin-right: 0.25rem;

  @media(max-width: 500px) {
    width: 12px;
    height: 12px;
  }
`;