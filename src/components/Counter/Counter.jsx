import React, { useState } from 'react';

export const Counter = () => {
    const [open, setOpen] = useState(true);
    const [start, setStart] = useState(0);

    const increment = () => setStart(start + 1);
    const decrement = () => setStart(start - 1);
    const toggle = () => setOpen(!open);

    return (
        <div>
            {open && <p>Counter: {start}</p>}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={toggle}>{open ? "Hide" : "Show"}</button>
          
        </div>
    );
};
