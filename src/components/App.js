import React from 'react';
import HoverContent from './HoverContent';

function App() {

  // Position to display the tooltip
  const positionToDisplayTooltip = "right";

  return (
    <div className="App" >
      {/* Hover component */}
      <HoverContent position={positionToDisplayTooltip} />
    </div >
  );
}

export default App;