import React, { useState } from 'react'
import '../App.css'

export default function Counter() {

    const [counter,setcounter]=useState(0);
    function handleIncrement(){
        setcounter(counter+1);
    }
    function handleDecrement(){
        setcounter(counter-1);
    }
    return (
        <div className='counter'>
        <button onClick={handleIncrement}>increament</button>
        <h1>{counter}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}
