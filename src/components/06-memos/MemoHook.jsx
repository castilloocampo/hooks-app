import { useMemo, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';
// import Small from './Small';

const MemorHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true)
  const memoizedHeavyProcess = useMemo(() => heavyProcess(counter), [counter])
  // const memoizedSmallComponent = useMemo(() => <Small value={counter}/>, [counter])
  
  return (
    <div>
      <h1>Memorize</h1>
      <h1>Counter: <small> {counter} </small></h1>
      {/* <h1>Counter: {memoizedSmallComponent} </h1> */}
      <hr />

      <p> {memoizedHeavyProcess} </p>

      <button
        className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600'
        onClick={increment} >+1</button>

      <button
        className='ml-3 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white'
        onClick={() => setShow(!show)} >
        Toggle {JSON.stringify(show)}
      </button>
    </div>
  );
}

export default MemorHook;
