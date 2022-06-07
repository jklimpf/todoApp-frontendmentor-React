import React, { useRef } from "react";
import classes from "./Form.module.css";

const Form = function (props) {
  const inputRef = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
    if (inputRef.current.value.length === 0) return;

    props.onSubmitting(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={inputRef}
        placeholder="Create a new todo..."
        className={classes.form}
      />
    </form>
  );
};

export default Form;
