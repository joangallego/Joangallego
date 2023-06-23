import React, {useState, useEffect} from 'react';
import { FaRegClock } from'react-icons/fa';






    let digit1 = props.seconds;
    let digit2 = 0;
    let digit3 = 0;
    let digit4 = 0;
    let digit5 = 0;
    let digit6 = 0;

    if (props.seconds >= 9) {
        digit2 = Math.floor(props.seconds /10)
        digit1 = props.seconds % 10;
    }




    return (
        <div id="main-container" className="container">
            <div className="iconClock e-75 h-75"> <FaRegClock /></div>
            <div className="number w-50 h-75">0</div>
            <div className="number w-50 h-75">0</div>
            <div className="number w-50 h-75">0</div>
            <div className="number w-50 h-75">0</div>
            <div className="number w-50 h-75">{digit2}</div>
            <div className="number w-50 h-75">{digit1}</div>
        </div>
    );

