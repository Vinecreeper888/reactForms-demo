import React, { useState } from "react";
import classes from "./SampleForm.module.css";

const SampleForm = () => {
  const [name, setName] = useState("");
  const [inputNameTouched, setInputNameTouched] = useState(false);
  const inputNameIsValid = name.trim() !== ""; //check if its null
  const inputNameIsInvalid = !inputNameIsValid && inputNameTouched;

  const [email, setEmail] = useState("");
  const [inputEmailTouched, setInputEmailTouched] = useState(false);
  const inputEmailIsValid = email.trim() !== "";
  const inputEmailIsInvalid = !inputEmailIsValid && inputEmailTouched;

//   const enteredEmailIsValid = enteredEmail.trim() !== ""; //check if its empty or not
//   const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  const inputNameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
    //console.log(event.target.value);
    //setInputNameIsValid(true);
  };

  const inputEmailChangeHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const inputNameBlurHandler = (event) => {
    event.preventDefault();
    setInputNameTouched(true);
  };

  const inputEmailBlurHandler = (event) => {
    event.preventDefault();
    setInputEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputNameIsValid && inputEmailIsValid) {
      console.log(name);
      console.log(email);
      if(!inputNameIsValid) return;
      if(!inputEmailIsValid) return;
    
      setName("");
      setEmail("");

    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.formContainer} onSubmit={formSubmitHandler}>
        <div className={classes.inputFields}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={inputNameChangeHandler}
            onBlur={inputNameBlurHandler}
            value={name}
          />
        </div>
        {inputNameIsInvalid &&(
          <p className={classes.errorText}>Name must not be empty.</p>
        )}
        <div className={classes.inputFields}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={inputEmailChangeHandler}
            onBlur={inputEmailBlurHandler}
            value={email}
          />
        </div>
        {inputEmailIsInvalid && <p className={classes.errorText}>Email must not be empty.</p>}
        <div className={classes.submitButton}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SampleForm;
