import classes from "./Header.module.css";
import Theme from "./Theme";
import React from "react";

const Header = function (props) {
  const themeHandler = function () {
    props.onThemeClick();
  };

  return (
    <div className={classes.header}>
      <h1>TODO</h1>
      <Theme onThemeClick={themeHandler} lightTheme={props.lightTheme}></Theme>
    </div>
  );
};

export default Header;
