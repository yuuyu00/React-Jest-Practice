import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleCountUpClick = () => {
    setErrorMsg('');
    setCount(count + 1);
  };

  const handleCountDownClick = () => {
    if (count === 0) {
      setErrorMsg('Cannot decrement');
      return;
    }

    setCount(count - 1);
  };

  const renderCounterButton = () => {
    return (
      <div>
        <button id="increment_button" onClick={handleCountUpClick}>
          +1
        </button>
        <button id="decrement_button" onClick={handleCountDownClick}>
          -1
        </button>
      </div>
    );
  };

  return (
    <div>
      <div id="count">{count}</div>
      <div id="errorMessage">{errorMsg}</div>
      {renderCounterButton()}
    </div>
  );
};

export default Counter;
