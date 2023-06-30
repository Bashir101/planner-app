import React, { useState } from 'react';

const CalculatorWidget = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression); // Note: using eval can be risky in production environments. Consider using a safer alternative.
      setExpression(result.toString());
    } catch (error) {
      console.error('Error calculating expression:', error);
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  return (
    <div className="calculator-widget">
      <input
        type="text"
        value={expression}
        placeholder="0"
        onChange={(e) => setExpression(e.target.value)}
        style={{
          borderRadius: '50px',
          textAlign: 'center',
          width: '80%',
          margin: '10px auto',
          padding: '10px',
        }}
      />
      <div className="button-row">
        <button
          onClick={() => handleButtonClick('7')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick('8')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          +
        </button>
      </div>
      <div className="button-row">
        <button
          onClick={() => handleButtonClick('4')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          -
        </button>
      </div>
      <div className="button-row">
        <button
          onClick={() => handleButtonClick('1')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('*')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          *
        </button>
      </div>
      <div className="button-row">
        <button
          onClick={() => handleButtonClick('0')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick('.')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          .
        </button>
        <button
          onClick={handleCalculate}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick('/')}
          style={{ width: '25%', backgroundColor: 'white', color: 'black' }}
        >
          /
        </button>
      </div>
      <div className="button-row">
        <button onClick={handleClear} style={{ width: '100%', backgroundColor: 'white', color: 'black' }}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default CalculatorWidget;
