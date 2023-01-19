import React, { useState } from 'react';
import Tooltip from './Tooltip';

const HoverContent = ({ hovering, position }) => {
    return (
        <>
            <button className='hover-btn'>Hover on me!</button>
            {true && <Tooltip position={position} />}
        </>
    )
}

const HoverContentWrapper = (Component) => {
    const UpdatedComponent = () => {
        const [hovering, setHovering] = useState(false);

        function mouseOver() {
            setHovering(true);
        }

        function mouseOut() {
            setHovering(false);
        }

        return <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="position-relative">
            <Component hovering={hovering} />
        </div>
    }

    return UpdatedComponent;
}

export default HoverContentWrapper(HoverContent);