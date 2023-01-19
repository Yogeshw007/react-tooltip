import React, { useState } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'

const HoverContent = ({ hovering, position }) => {
    console.log(position)
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

const HoverContentWrapper = (Component) => {

    const UpdatedComponent = (props) => {
        const [hovering, setHovering] = useState(false);

        function mouseOver() {
            setHovering(true);
        }

        function mouseOut() {
            setHovering(false);
        }

        return <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <Component hovering={hovering} {...props} />
        </div>
    }

    return UpdatedComponent;
}

export default HoverContentWrapper(HoverContent);