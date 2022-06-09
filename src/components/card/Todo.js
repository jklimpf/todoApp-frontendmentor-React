import React, { Fragment, useState } from "react";
import ActionsBar from "../Actions/ActionsBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Header from "../layout/Header";
import classes from "./Todo.module.css";

const Todo = function (props) {
  useEffect(() => {
    const tasksArr = JSON.parse(localStorage.getItem("tasks"));

    setTasksArr(tasksArr);
  }, []);

  const [tasksArr, setTasksArr] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedIsClicked, setCompletedIsClicked] = useState(false);
  const [activeTasks, setActiveTasks] = useState([]);
  const [activeIsClicked, setActiveIsClicked] = useState(false);
  const [allIsClicked, setAllIsClicked] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }, [tasksArr]);

  const checkTodoHandler = function (id) {
    const existingTodo = tasksArr.find((todo) => todo.id === Number(id));
    const existingTodoIndex = tasksArr.findIndex(
      (todo) => todo.id === Number(id)
    );

    const updatedExistingTodo = {
      ...existingTodo,
      completed: !existingTodo.completed,
    };

    const updatedArr = [...tasksArr];
    updatedArr[existingTodoIndex] = updatedExistingTodo;

    setAllIsClicked(true);
    setCompletedIsClicked(false);
    setActiveIsClicked(false);
    setActiveTasks([]);
    setCompletedTasks([]);
    setTasksArr([...updatedArr]);
  };

  const tasksLeft = tasksArr.reduce((prev, curr) => {
    if (curr.completed === false) {
      return prev + 1;
    } else {
      return prev;
    }
  }, 0);

  const inputHandler = function (input) {
    setTasksArr([
      ...tasksArr,
      { id: Math.random(), task: input, completed: false },
    ]);
  };

  const deleteTodoHandler = function (id) {
    const deleteTask = tasksArr.filter((task) => task.id !== Number(id));
    setAllIsClicked(true);
    setCompletedIsClicked(false);
    setActiveIsClicked(false);
    setActiveTasks([]);
    setCompletedTasks([]);
    setTasksArr([...deleteTask]);
  };

  const deleteCompletedHandler = function () {
    const deleteCompleted = tasksArr.filter((task) => task.completed === false);
    setCompletedTasks([]);
    setTasksArr([...deleteCompleted]);
  };

  const showCompletedHandler = function () {
    const completedArr = tasksArr.filter((task) => task.completed === true);
    setCompletedTasks([...completedArr]);
    setCompletedIsClicked(true);
    setActiveIsClicked(false);
    setActiveTasks();
    setAllIsClicked(false);
  };

  const showAllHandler = function () {
    setCompletedTasks([]);
    setCompletedIsClicked(false);
    setActiveIsClicked(false);
    setTasksArr(tasksArr);
    setAllIsClicked(true);
  };

  const showActiveHandler = function () {
    const activeArr = tasksArr.filter((task) => task.completed === false);
    setActiveTasks([...activeArr]);
    setCompletedTasks([]);
    setActiveIsClicked(true);
    setCompletedIsClicked(false);
    setAllIsClicked(false);
  };

  const themeHandler = function () {
    props.onThemeClick();
  };

  const dragAndDropHandler = function (e, dragItem, dragOverItem) {
    const copyListItems = [...tasksArr];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTasksArr(copyListItems);
  };

  return (
    <Fragment>
      <Header
        onThemeClick={themeHandler}
        lightTheme={props.lightTheme}
      ></Header>
      <TodoForm
        lightTheme={props.lightTheme}
        onSubmitting={inputHandler}
      ></TodoForm>
      <TodoList
        lightTheme={props.lightTheme}
        onCheckTodo={checkTodoHandler}
        onDeleteTodo={deleteTodoHandler}
        tasksData={
          (completedIsClicked && completedTasks) ||
          (activeIsClicked && activeTasks) ||
          tasksArr
        }
        onDragAndDrop={dragAndDropHandler}
      ></TodoList>
      <ActionsBar
        lightTheme={props.lightTheme}
        onDeleteCompleted={deleteCompletedHandler}
        tasksLeft={tasksLeft}
        onShowCompleted={showCompletedHandler}
        onShowAll={showAllHandler}
        onShowActive={showActiveHandler}
        onShowCompletedClicked={completedIsClicked}
        onShowAllClicked={allIsClicked}
        onShowActiveClicked={activeIsClicked}
      ></ActionsBar>
      <div className={classes.reorderNote}>
        <p>Drag and drop to reorder list</p>
      </div>
    </Fragment>
  );
};

export default Todo;
