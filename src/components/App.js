import React, { useState } from 'react';
import HoverContent from './HoverContent';

function App() {

  const positionToDisplayTooltip = "right";

  return (
    <div className="App" >
      <HoverContent position={positionToDisplayTooltip} />
    </div >
  );
}

export default App;