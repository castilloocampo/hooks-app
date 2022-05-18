import { useCallback, useState, useMemo } from 'react';
import ShowIncrement from './ShowIncrement';
import { useEffect } from 'react';

const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const increment = useCallback((num = 1) => {
    setCounter(c => c + num);
  }, [setCounter]);

  // const memoizedShowIncrement = useMemo(() => <ShowIncrement increment={increment} />, [])

  useEffect(() => {
    // ???
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      {/* {memoizedShowIncrement} */}
      <ShowIncrement increment={increment}/>
    </div>
  );
}

export default CallbackHook;
