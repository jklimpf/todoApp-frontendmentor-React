import React, { useState } from "react";
import DarkTheme from "./DarkTheme";
import LightTheme from "./LightTheme";
import classes from "./Theme.module.css";

const Theme = function (props) {
  const themeHandler = function () {
    props.onThemeClick();
  };

  return (
    <button onClick={themeHandler}>
      {props.lightTheme && <LightTheme></LightTheme>}
      {!props.lightTheme && <DarkTheme></DarkTheme>}
    </button>
  );
};

export default Theme;
