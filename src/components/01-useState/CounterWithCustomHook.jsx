import React from 'react';
import './CounterApp.css';
import useCounter from '../../hooks/useCounter';
const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter {counter}</h1>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() => increment(2)} >+1</button>
      <button
        className="btn btn-primary"
        onClick={reset} >Reset</button>
      <button
        className="btn btn-secondary"
        onClick={() => decrement(2)} >-1</button>
    </>
  );
}

export default CounterWithCustomHook;
