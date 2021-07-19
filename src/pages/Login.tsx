import React from "react";
import "./Login.css";
import useInput from "../hooks/useInput";

const Login = () => {
  const { getInput, handleInvalid, error, userInput } = useInput();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInput);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
          <label htmlFor='age'>Age: </label>
          <input
            type='text'
            name='age'
            id='age'
            onBlur={getInput}
            onInvalid={handleInvalid}
            required
          />
          {error?.name && <p>{error?.name}</p>}
        </div>
        <div>
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
        <div>
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
        <div>
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
