import React from 'react'

import { Home } from './pages/Home';

import { Container } from './styles/container';
import { GlobalStyled } from './styles/global';

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyled/>
      <Home />
    </Container>
  ); 
}

export default App;
