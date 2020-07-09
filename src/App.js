import React from 'react';
import './App.css';
import StockGrid from './components/StockGrid.jsx'
import {Button, Container} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container>
          <StockGrid></StockGrid>
      </Container>
    </div>
  );
}

export default App;
