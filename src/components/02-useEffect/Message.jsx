import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  });
  const { x, y } = coords;


  useEffect(() => {
    const mouseMove = (e) => {
      const { x, y } = e;
      const coords = { x, y };
      setCoords(coords)
    };
    window.addEventListener('mousemove', mouseMove)

    return () => {
      console.log('Adiós a Message');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return (
    <div>
      <h3>Eres Genial!!</h3>
      <h4>{x} : {y}</h4>
    </div>
  );
}

export default Message;
