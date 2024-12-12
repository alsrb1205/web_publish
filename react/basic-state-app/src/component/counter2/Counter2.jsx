import React, { useState } from 'react';

export default function Counter2({ total ,click}) {
    const [number, setNumber] = useState(0);

    const handleNumber = (type) => {
        if ( type === '-') {
            setNumber(number - 1);
            click("-")
        } else if (type === "+") {
            setNumber(number + 1);
            click("+")

        }
    }
    return (
        <div>
            <div className='numbers'>
                <span>{number} /</span>
                <span> {total}</span>
            </div>
            <div className='buttons'>
                <button type="button" onClick={() => handleNumber("+")}>+</button>
                <button type="button" onClick={() => handleNumber("-")}>-</button>
            </div>
        </div>
    );
}

