import { useState } from 'react';

const UseForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value
    });
  }

  return [values, handleInputChange];
}

export default UseForm;
