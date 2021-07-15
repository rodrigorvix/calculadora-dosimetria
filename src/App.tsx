import React from 'react'
import { GlobalStorage } from './contexts/GlobalStorage';

import { Home } from './pages/Home';

import { Container } from './styles/container';
import { GlobalStyled } from './styles/global';

const App: React.FC = () => {
  return (
    <GlobalStorage>
      <Container>
      <GlobalStyled/>
      <Home />
    </Container>
    </GlobalStorage>
    
  ); 
}

export default App;
