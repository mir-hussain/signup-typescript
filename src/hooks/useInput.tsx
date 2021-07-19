import React, { useState } from "react";

const useInput = () => {
  interface IError {
    name?: string;
    email?: string;
    password?: string;
  }
  const [error, setError] = useState<IError>({});
  const [userInput, setUserInput] = useState<object>({});

  const updateErrorByEvent = (
    event: React.FormEvent<HTMLInputElement>,
    status: string
  ) => {
    setError((currentError) => ({
      ...currentError,
      [event.currentTarget.name]: status,
    }));
  };

  const updateErrorManually = (
    name: string,
    warningText: string
  ) => {
    setError((currentError) => ({
      ...currentError,
      [name]: warningText,
    }));
  };

  const updateUserInput = (name: string, value: string) => {
    setUserInput((currentUserInput) => ({
      ...currentUserInput,
      [name]: value,
    }));
  };

  const handleInvalid = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    updateErrorByEvent(
      event,
      `${event.currentTarget.name} can't be empty`
    );
  };

  const nameValidation = (username: string) => {
    if (/([0-9])/.test(username)) {
      updateUserInput("name", "");
      updateErrorManually(
        "name",
        "Name can't have numbers in it"
      );
    } else {
      setError({});
      if (username.length < 4) {
        updateUserInput("name", "");
        updateErrorManually(
          "name",
          "Name can't be less than 4 character"
        );
      } else {
        setError({});
        updateUserInput("name", username);
      }
    }
  };

  const emailValidation = (email: string) => {
    if (email.length === 0) {
      updateUserInput("email", "");
      updateErrorManually("email", "email can't be empty");
    } else {
      if (!email.includes("@") || !email.includes(".com")) {
        updateUserInput("email", "");
        updateErrorManually("email", "Invalid email");
      } else {
        setError({});
        updateUserInput("email", email);
      }
    }
  };

  const passwordValidation = (password: string) => {
    if (password.length < 8) {
      updateUserInput("password", "");
      updateErrorManually(
        "password",
        "Password must be 8 character or longer."
      );
    } else {
      setError({});
      updateUserInput("password", password);
    }
  };

  const getInput = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    if (inputName === "name") {
      nameValidation(inputValue);
    } else if (inputName === "email") {
      emailValidation(inputValue);
    } else if (inputName === "password") {
      passwordValidation(inputValue);
    }
  };

  return { getInput, handleInvalid, error, userInput };
};

export default useInput;
