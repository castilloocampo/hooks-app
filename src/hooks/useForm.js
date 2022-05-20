import { useState } from 'react';

const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target: { name, value } }) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  }

  const resetForm = () => {
    setValues(initialState);
  }

  return [values, handleInputChange, resetForm];
}

export default useForm;
