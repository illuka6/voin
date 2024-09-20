import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';




const Type_tooltip = () => {
    const [tooltip, setTooltip] = useState({ visible: false, imgSrc: '', x: 0, y: 0 });

    const handleMouseEnter = (imgSrc, event) => {
        setTooltip({
            visible: true,
            imgSrc,
            x: event.pageX + 10,
            y: event.pageY + 10,
        });
    };

    const handleMouseMove = (event) => {
        if (tooltip.visible) {
            setTooltip((prev) => ({
                ...prev,
                x: event.pageX + 10,
                y: event.pageY + 10,
            }));
        }
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, visible: false });
    };

    return (
        <div className="container" onMouseMove={handleMouseMove}>
            <div
                className="block"
                onMouseEnter={(event) => handleMouseEnter('/public/home_img/item1.jpg', event)}
                onMouseLeave={handleMouseLeave}
            >
                區塊 1
            </div>
            <div
                className="block"
                onMouseEnter={(event) => handleMouseEnter('https://via.placeholder.com/100/ff0000/ffffff?text=Img2', event)}
                onMouseLeave={handleMouseLeave}
            >
                區塊 2
            </div>
            <div
                className="block"
                onMouseEnter={(event) => handleMouseEnter('https://via.placeholder.com/100/0000ff/ffffff?text=Img3', event)}
                onMouseLeave={handleMouseLeave}
            >
                區塊 3
            </div>

            {tooltip.visible && (
                <img
                    src={tooltip.imgSrc}
                    className="tooltip"
                    style={{ left: tooltip.x, top: tooltip.y }}
                    alt="Tooltip"
                />
            )}

            
        </div>
    );

};

export default Type_tooltip;