import React from "react";
import Form from "./Form";
import classes from "./TodoForm.module.css";
import Circle from "../UI/Circle";
import Card from "../UI/Card";

const TodoForm = function (props) {
  return (
    <Card classes={props.lightTheme ? classes.lightDiv : classes.formDiv}>
      <Circle
        y="15"
        x="22"
        r="10"
        color="darkgrey"
        width="1"
        fill="transparent"
      ></Circle>
      <Form onSubmitting={props.onSubmitting}></Form>
    </Card>
  );
};

export default TodoForm;
