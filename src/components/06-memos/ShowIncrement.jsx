import React from 'react';
import PropTypes from 'prop-types'

// const ShowIncrement = ({ increment }) => {
const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volví a renderizar :(")

  return (
    <button
      className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600'
      onClick={() => increment(5)} >
      Incrementar
    </button>
  );
})
// }


ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
}

export default ShowIncrement;
