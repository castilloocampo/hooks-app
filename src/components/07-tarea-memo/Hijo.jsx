import React from 'react'

const Hijo = React.memo(({ numero, incrementar }) => {

  console.log(' Me volví a generar :( ');

  return (
    <button
      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  )
})

export default Hijo;