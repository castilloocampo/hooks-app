import { useRef } from "react";


const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
        placeholder="Su nombre" />

      <button
        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline
        text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white mt-3
        "
        onClick={handleClick}  >
        Focus
      </button>
    </div>
  );
}

export default FocusScreen;
