import { useLayoutEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const [boxSize, setBoxSize] = useState({});
  const pQuote = useRef();

  useLayoutEffect(() => {
    setBoxSize(pQuote.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1 className=''>LayoutEffect</h1>
      <hr className='my-4' />

      <blockquote className={`flex mb-6 text-lg text-right`}>
        <p
          ref={pQuote}
          className=''>{quote}</p>
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button
        className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600'
        onClick={increment} >Siguiente quote</button>
    </div>
  );
}

export default LayoutEffect;
