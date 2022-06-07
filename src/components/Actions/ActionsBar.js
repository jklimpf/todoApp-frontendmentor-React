import React from "react";
import classes from "./ActionsBar.module.css";
import Card from "../UI/Card";

const ActionsBar = function (props) {
  const deleteCompletedHandler = function () {
    props.onDeleteCompleted();
  };

  const showCompletedHandler = function () {
    props.onShowCompleted();
  };

  const showAllHandler = function () {
    props.onShowAll();
  };

  const showActiveHandler = function () {
    props.onShowActive();
  };

  return (
    <Card classes={props.lightTheme ? classes.lightActions : classes.actions}>
      <h4>{props.tasksLeft} Left</h4>
      <div className={classes.actionButtons}>
        <button
          className={props.onShowAllClicked ? classes.clicked : ""}
          onClick={showAllHandler}
        >
          All
        </button>
        <button
          className={props.onShowActiveClicked ? classes.clicked : ""}
          onClick={showActiveHandler}
        >
          Active
        </button>
        <button
          className={props.onShowCompletedClicked ? classes.clicked : ""}
          onClick={showCompletedHandler}
        >
          Completed
        </button>
      </div>
      <button onClick={deleteCompletedHandler}>Clear completed</button>
    </Card>
  );
};

export default ActionsBar;
