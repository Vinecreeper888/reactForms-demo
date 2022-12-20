import useBasicForm from "../hooks/use-basicForm";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset,
    valueIsValid,
  } = useBasicForm((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    valueIsValid: lastNameIsValid,
  } = useBasicForm((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emaailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
  } = useBasicForm((value) => value.trim() !== "");

  let formIsValid = false;

  if (valueIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (valueIsValid) {
      console.log(enteredFirstName + " " + enteredLastName);
      console.log(enteredEmail);
      //console.log(enteredLastName);
    }

    reset();
  };

  const firstNameClasses =
    !firstNameHasError && !lastNameHasError && !emaailHasError
      ? "form-control"
      : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={firstNameClasses}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          onChange={firstNameChangeHandler}
          value={enteredFirstName}
          onBlur={firstNameBlurHandler}
        />
      </div>
      {firstNameHasError && (
        <p className="error-text">First name cannot be empty.</p>
      )}
      <div className={firstNameClasses}>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={enteredLastName}
        />
      </div>
      {lastNameHasError && (
        <p className="error-text">Last name cannot be empty.</p>
      )}
      <div className={firstNameClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emaailHasError && (
        <p className="error-text">Email cannot be empty.</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
