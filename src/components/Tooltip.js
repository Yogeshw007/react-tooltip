import React from 'react'

function Tooltip({ position }) {
    return (
        <div className='tooltip tooltip-arrow-left'>
            <span className="tooltiptext">Thanks for hovering! I'm a tooltip</span>
        </div>
    )
}

export default Tooltip; 