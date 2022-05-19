import React, { useEffect } from 'react';

import useForm from '../../hooks/useForm';


const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className='pt-3'>
        <input
          type="text"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange} />
      </div>
      <div>
        <input
          type="email"
          name="email"
          className="focus:outline-none focus:shadow-outline"
          placeholder="email@mail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="focus:outline-none focus:shadow-outline"
          placeholder="******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange} />
      </div>
      <button type="submit"> Guardar </button>
    </form>
  );
}

export default FormWithCustomHook;
