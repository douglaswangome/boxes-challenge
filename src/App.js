import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import boxes from './data';

const App = () => {
  const [squares, setSquares] = useState(boxes);

  const switchColor = (id) => {
    setSquares(prevSquare => {
      return prevSquare.map((square) => {
        return square.id === id ? {...square, colored: !square.colored} : {...square};
      });
    });
  }

  const box = squares.map((square) => {
    return <Box key={square.id} {...square} switchColor={() => switchColor(square.id)} />;
  });

  return (
    <div className="app">
     {box}
    </div>
  );
}

export default App;