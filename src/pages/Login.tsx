import React from "react";
import { useState } from "react";
import useInput from "../hooks/useInput";

const Login = () => {
  const { getInput, handleInvalid, error, userInput } = useInput();

  interface IData {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    age?: number;
  }
  const [data, setData] = useState<IData>({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((pData) => ({ ...pData, ...userInput }));
  };

  console.log(data);
  return (
    <div>
      <div>
        {data.name && (
          <p>
            Name: {data.name}, Email: {data.email}
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-form__input'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            id='name'
            onBlur={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.name && <p>{error?.name}</p>}
        </div>
        <div className='login-form__input'>
          <label htmlFor='age'>Age: </label>
          <input
            type='text'
            name='age'
            id='age'
            onBlur={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.age && <p>{error?.age}</p>}
        </div>
        <div className='login-form__input'>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            name='email'
            id='email'
            onBlur={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.email && <p>{error?.email}</p>}
        </div>
        <div className='login-form__input'>
          <label htmlFor='phone'>Phone: </label>
          <input
            type='text'
            name='phone'
            id='phone'
            onBlur={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.phone && <p>{error?.phone}</p>}
        </div>
        <div className='login-form__input'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onInput={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.password && <p>{error?.password}</p>}
        </div>
        <div>
          {Object.keys(error).length === 0 && (
            <button type='submit'>Submit</button>
          )}
          {Object.keys(error).length > 0 && (
            <button disabled type='submit'>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
