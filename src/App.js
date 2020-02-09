import React from 'react';
import { example } from './sample';
import LazyImage from './ImgComponent';
import './App.css';

function App() {
  return (
    <ul className="App">
      {/* {example.map(item => (
        <li key={item.id} className="ImgContainer">
          <LazyImage src={item.url} alt={item.title} />
        </li>
      ))} */}
      <LazyImage />

    </ul>
  );
}

export default App;
