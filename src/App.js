import React from 'react';
import Box from './components/Box';
import boxes from './components/boxes';
import './App.css';

function App() {
  const [boxesArray, setBoxesArray] = React.useState(boxes)
  const mapBoxesArray = boxesArray.map(box => <Box num={box.id} key={box.id} on={box.on}/>)

  return (
    <div>
      {mapBoxesArray}
    </div>
  );
}

export default App;
