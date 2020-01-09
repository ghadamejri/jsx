import React from 'react';

import './App.css';
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100px" }}>
        <h1 className="title red"> My title</h1>
        <br />
        <img className="App-image" src={imageInSrc} />
        <br />

        <img className="App-image" src="imageInPublic.jpg" />
        </div>
      </div>
        );
      }
      
      export default App;
