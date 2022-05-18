import React from 'react';

const Small = React.memo(({ value }) => {
// const Small = ({ value }) => {
  console.log("Me volví a llamar :( ");

  return (
    <small> {value} </small>
  );
})
// }

export default Small;
