import { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1 className=''>BreakingBad Quotes</h1>
      <hr className='my-4' />

      {
        loading ? (
          <div
            data-testid='loading' 
            className={`relative px-3 py-3 mb-4 border rounded bg-teal-200 border-teal-300 text-teal-800 text-center animate__animated animate__fadeOutLeft animate__slower`} >
            Loading
          </div>
        ) : (
          <blockquote className={`mb-6 text-lg text-right animate__animated ${loading ? 'animate__fadeOut animate__delay-1s' : 'animate__fadeIn'} h-14`}>
            <p className='mb-0'> {quote} </p>
            <footer className='block text-gray-400'> –– {author} </footer>
          </blockquote>
        )
      }
      <button
        className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600'
        onClick={increment} >Siguiente quote</button>
    </div>
  );
}

export default MultipleCustomHooks;
