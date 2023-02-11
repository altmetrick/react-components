import './App.css';

import ButtonPage from './pages/buttonPage/ButtonPage';
import AccordionPage from './pages/accordionPage/AccordionPage';
import Dropdown, { OptionT } from './components/dropdown/Dropdown';
import { useState } from 'react';
import Panel from './components/panel/Panel';

function App() {
  const [selected, setSelected] = useState<OptionT | null>(null);

  const handleSelect = (selected: OptionT) => {
    setSelected(selected);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div className="App">
      <Dropdown options={options} value={selected} onChange={handleSelect} />
      <div>Hello world</div>
      <Panel
        className="bg-red-600"
        onClick={() => {
          console.log('first');
        }}
      ></Panel>
    </div>
  );
}

export default App;
