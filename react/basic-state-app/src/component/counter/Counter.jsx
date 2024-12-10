import { useState } from "react";
export default function Counter({ total, click }) {
    const [number, setNumber] = useState(0);

    function increment() {
        (number < 10) ? setNumber(number + 1) : setNumber(number); 
        click(number,'+');
    }
    function decrement() {
        (number > 0) ? setNumber(number - 1) : setNumber(number);
        click(number,'-');
    }

    return (
        <div className="container">
            <div>
                <span className="number">{number}/</span>
                <span className="total-number">{total}</span>
            </div>
            <button type="button" className="button"
                onClick={() => { setNumber(number + 1) }}>ADD</button>
            <button type="button" className="button"
                onClick={increment}>+</button>
            <button type="button" className="button"
                onClick={decrement}>-</button>
        </div>
    );
} 