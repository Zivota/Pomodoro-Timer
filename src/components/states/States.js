import React from "react";
import classes from "./states.module.css";

const States = ({ currentActiveState }) => {
  let currentElement = (
    <div className={classes.state}>
      <h3>pomodoro</h3>{" "}
    </div>
  );

  if (currentActiveState === "focus") {
    currentElement = (
      <div className={`${classes.state} ${classes.focus}`}>
        <h3>pomodoro</h3>
      </div>
    );
  } else if (currentActiveState === "short") {
    currentElement = (
      <div className={`${classes.state} ${classes.short}`}>
        <h3>short break</h3>
      </div>
    );
  } else {
    currentElement = (
      <div className={`${classes.state} ${classes.long}`}>
        <h3>long break</h3>
      </div>
    );
  }

  return (
    <div className={classes.states}>
      <div className={classes.mobile}>{currentElement}</div>
      <div className={classes.desktop}>
        <div
          className={`${classes.state} ${
            currentActiveState === "focus" && classes.focus
          }`}
        >
          <h3>pomodoro</h3>
        </div>
        <div
          className={`${classes.state} ${
            currentActiveState === "short" && classes.short
          }`}
        >
          <h3>short break</h3>
        </div>
        <div
          className={`${classes.state} ${
            currentActiveState === "long" && classes.long
          }`}
        >
          <h3>long break</h3>
        </div>
      </div>
    </div>
  );
};

export default States;
