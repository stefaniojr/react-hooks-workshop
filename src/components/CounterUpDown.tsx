import React, { useEffect, useReducer, useState } from 'react';
import './Counter.css';

type Action = { type: 'increment' } | { type: 'decrement' };

function counterReducer(state: number, action: Action): number {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

const CounterUpDown: React.FC = () => {
    const [count, dispatch] = useReducer(counterReducer, 0);

    return (
        <div className="counter-container">
            <p>Estou no número {count}</p>
            <div className="button-container">
                <button onClick={() => dispatch({ type: 'increment' })}>Sobe</button>
            </div>
            <div className="button-container">
                <button onClick={() => dispatch({ type: 'decrement' })}>Desce</button>
            </div>
        </div>
    );
}

export default CounterUpDown;