import { useState } from 'react';
import Display from './Display';
import { calculate } from '../utils/utils';

export default function Calculator() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression(prev => prev + value);
  };

  const handleClear = () => setExpression('');
  const handleEquals = () => setExpression(calculate(expression).toString());

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

  return (
    <div className="calculator">
      <Display value={expression} />
      <div className="buttons">
        {buttons.map(btn => (
          <button
            key={btn}
            onClick={() =>
              btn === '=' ? handleEquals() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}
