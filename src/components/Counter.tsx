import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-container">
      <p>Você clicou {count} vezes</p>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      </div>
    </div>
  );
}

export default Counter;