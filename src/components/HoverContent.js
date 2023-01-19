import React, { useState } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'

const HoverContent = (props) => {
    // Hovering and position props
    const { hovering, position } = props;

    return (
        <>
            <Tooltip
                title="Thanks for hovering! I'm a tooltip"
                position={position}
                open={hovering}
                arrow={true}
                size='regular'
            >
                <button className='hover-btn'>Hover on me!</button>
            </Tooltip>

        </>
    )
}

// Wrapper for the Hover content component to add the mouse events
const HoverContentWrapper = (Component) => {

    const EnhancedComponent = (props) => {
        const [hovering, setHovering] = useState(false);

        // Function to set hovering state as true on mouse over
        function mouseOver() {
            setHovering(true);
        }

        // Function to set hovering state as false on mouse out 
        function mouseOut() {
            setHovering(false);
        }

        // Adding mouse events to a container element and returning the enhanced component
        return <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <Component hovering={hovering} {...props} />
        </div>
    }

    return EnhancedComponent;
}

export default HoverContentWrapper(HoverContent);