import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';


const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      { show && <MultipleCustomHooks />}

      <button
        className='mt-5 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline
        bg-blue-600 text-white active:bg-blue-900
        '
        onClick={()=>setShow(!show)} >
        Toggle Component
      </button>
    </div>
  );
}

export default RealExampleRef;
