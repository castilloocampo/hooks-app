import { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>Memorize</h1>
      <h1>Counter: <Small value={counter} /></h1>
      <hr />

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

export default Memorize;
