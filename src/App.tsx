import React from 'react';
import './styles/App.scss';
import 'bulma/css/bulma.min.css';
import { Sliders } from './components/Sliders';
import { Charts } from './components/Charts';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Sliders />
        <Charts />
      </div>
    </div>
  );
};

export default App;
