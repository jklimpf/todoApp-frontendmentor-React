import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Task from "./Task";
import classes from "./TodoList.module.css";

const TodoList = function (props) {
  const checkTodoHandler = function (id) {
    props.onCheckTodo(id);
  };

  const deleteTodoHandler = function (id) {
    props.onDeleteTodo(id);
  };

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    props.onDragAndDrop(e, dragItem, dragOverItem);
  };

  const todoList = props.tasksData.map((task, index) => {
    return (
      <li
        key={task.id}
        draggable
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        onDragOver={(e) => e.preventDefault()}
      >
        <Task
          onCheckTodo={checkTodoHandler}
          onDeleteTodo={deleteTodoHandler}
          id={task.id}
          completed={task.completed}
          task={task.task}
        ></Task>
      </li>
    );
  });

  return (
    <Card classes={props.lightTheme ? classes.lightList : classes.todoList}>
      <ul>{todoList}</ul>
    </Card>
  );
};

export default TodoList;
