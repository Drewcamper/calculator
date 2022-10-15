import React from 'react';
import { Calculator } from './components/componentWrapper';


import { CalculatorProvider} from './context/context'


function App() {

  return (
    <>
      <CalculatorProvider >
        <Calculator />
      </CalculatorProvider>
    </>
  );
}

export default App;