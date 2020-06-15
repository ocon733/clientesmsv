import React from 'react';
import './App.css';
import Cabecera from './componentes/cabecera.component';
import Principal from './componentes/principal.component';
import Pie from './componentes/pie.component';

function App() {
  return (
    <div className="App">
      <Cabecera/>
      <Principal/>
      <Pie/>
    </div>
  );
}

export default App;
