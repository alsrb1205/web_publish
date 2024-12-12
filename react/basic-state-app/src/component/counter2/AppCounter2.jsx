import React, { useState } from 'react';
import Counter2 from './Counter2';

export default function AppCounter2() {
    const [totalNumber,setTotalNumber]=useState(0);
    const totalHandle=(type)=>{
        (type === '-') ? setTotalNumber(totalNumber - 1): setTotalNumber(totalNumber + 1);
    }
    return (
        <div>
            <Counter2 total={totalNumber} click={totalHandle}/>
            <Counter2 total={totalNumber} click={totalHandle}/>
            <Counter2 total={totalNumber} click={totalHandle}/>
        </div>
    );
}

