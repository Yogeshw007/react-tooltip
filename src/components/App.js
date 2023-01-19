import React, { useState } from 'react';
import HoverContent from './HoverContent';

function App(props) {
  return (
    <div className="App" >
      {/* <div className="container" onMouseMove={props.mouseOver}> */}
      <div className="container" >
        <HoverContent />
      </div>
    </div >
  );
}

const AppWrapper = (Component) => {
  const UpdatedComponent = () => {
    const [position, setPosition] = useState('');

    function mouseOver(e) {
      const x = e.clientX, y = e.clientY;

      console.log((window.innerWidth - (window.innerWidth - x)), (window.innerHeight - (window.innerHeight - y)))

      if (
        (window.innerWidth - (window.innerWidth - x)) >
        (window.innerHeight - (window.innerHeight - y))
      ) {
        console.log('x')
      } else {
        console.log('y')
      }

      // console.log(x, y)
    }

    return <Component position={position} mouseOver={mouseOver} />;

  }

  return UpdatedComponent;
}

export default AppWrapper(App);