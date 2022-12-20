import { useState } from "react";

const useBasicForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const inputIsValid = validateValue(enteredValue);
  const inputIsInvalid = !inputIsValid && enteredValueTouched;

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    event.preventDefault();
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  }

  return {
    value: enteredValue,
    hasError: inputIsInvalid,
    valueIsValid: inputIsValid,
    valueChangeHandler: inputChangeHandler,
    inputBlurHandler,
    reset
  }


};

export default useBasicForm;//
//more power
//if we have releated pieces of states which are 
//manae=ged by ini=dividual states