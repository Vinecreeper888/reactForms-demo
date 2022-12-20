import {useReducer, useState} from "react";

const initalInputSate = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state,action) => {
   if(action.type === "INPUT") {
    return {value: action.value, isTouched: state.isTouched};
   } 
   if(action.type === "BLUR") {
    return{isTouched: true,value: state.value};
    }
    if(action.type === "RESET") {
        return {isTouched: false, value:""};
    } 
   
    return inputStateReducer;
}

const useInput = (validateValue) => {
const [inputState, dispatch] = useReducer(inputStateReducer,initalInputSate);

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  
  //const valueIsValid = validateValue(enteredValue);
  const valueIsValid = validateValue(InitialInputState.value);
  const hasError = !valueIsValid && inputState.value;
  //const hasError = !valueIsValid && isTouched;

  const valueChangedHandler = (event) => {
    dispatch({type: 'INPUT',value: event.target.value});
    //setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    dispatch({type: 'BLUR'});
    //setIsTouched(true);
  };

  const reset = () => {
    dispatch({type: "RESET"});
    // setEnteredValue("");
    // setIsTouched(false);
  }


  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;



//custom hooks should be generic i.e it is not
//limited to one specific input