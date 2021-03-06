import React, { useEffect, useState } from 'react';
import './effects.css'
import Message from './Message';

const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: "",
    email: ""
  });

  const { name, email } = formState;
  useEffect(() => {
    // console.log("hey!!");
  }, []);

  useEffect(() => {
    // console.log("formState Cambió");
  }, [formState]);

  useEffect(() => {
    // console.log("email Cambió");
  }, [email]);

  const handleInputChange = ({ target: { name, value } }) => {
    setformState({
      ...formState,
      [name]: value
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange} />
      </div>

      { (name==='123') && <Message />}
    </>
  );
}

export default SimpleForm;
