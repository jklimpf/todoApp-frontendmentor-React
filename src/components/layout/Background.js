import React, { useState } from "react";
import classes from "./Background.module.css";

import lightPicture from "../../assets/images/bg-desktop-light.jpg";
import darkPicture from "../../assets/images/bg-desktop-dark.jpg";
import Todo from "../card/Todo";

const Background = function (props) {
  const [lightTheme, setLightTheme] = useState(false);

  const themeHandler = function () {
    setLightTheme((prev) => !prev);
  };

  return (
    <div
      className={`${lightTheme ? classes.bodyDivLight : classes.bodyDivDark}`}
    >
      <img
        className={classes.backgroundImg}
        src={`${lightTheme ? lightPicture : darkPicture}`}
        alt="img"
      ></img>
      <Todo onThemeClick={themeHandler} lightTheme={lightTheme}></Todo>
    </div>
  );
};

export default Background;
