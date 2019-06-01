import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleCountUpClick = () => {
    setCount(count + 1);
  };

  const handleCountDownClick = () => {
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
      {count}
      {renderCounterButton()}
    </div>
  );
};

export default Counter;
