import React from 'react';

const Small = ({ value }) => {
  console.log("Me volví a llamar :( ");

  return (
    <small> {value} </small>
  );
}

export default Small;
