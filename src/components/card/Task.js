import React from "react";
import Circle from "../UI/Circle";
import classes from "./Task.module.css";

const Task = function (props) {
  const clickCompleteHandler = function (e) {
    const id = e.target.id;
    props.onCheckTodo(id);
  };

  const deleteHandler = function (e) {
    const id = e.target.id;
    props.onDeleteTodo(id);
  };

  return (
    <div className={classes.task}>
      <div id={props.id} className={classes.content}>
        <button id={props.id} onClick={clickCompleteHandler}>
          <Circle
            id={props.id}
            y="15"
            x="22"
            r="10"
            color="darkgrey"
            width="1"
            fill={`${props.completed ? "green" : "transparent"}`}
          ></Circle>
        </button>
        <p className={props.completed ? classes.overline : ""}>{props.task}</p>
      </div>
      <div className={classes.deleteDiv}>
        <button id={props.id} onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
