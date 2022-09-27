import React from "react";
import classes from "./Display.module.css";

const Display = ({
  timeCounter,
  toggleStart,
  startTimer,
  totalFocusTime,
  focusState,
  totalBreakTime,
  openModalHandler,
}) => {
  const showTime = (
    <h1>
      {Math.floor(timeCounter / 60) < 10
        ? "0" + Math.floor(timeCounter / 60)
        : Math.floor(timeCounter / 60)}{" "}
      : {timeCounter % 60 < 10 ? "0" + (timeCounter % 60) : timeCounter % 60}
    </h1>
  );

  const focusPercentage = (timeCounter / (totalFocusTime * 60)) * 100;

  const breakPercentage = (timeCounter / (totalBreakTime * 60)) * 100;

  const focusBtn = (
    <button className={classes.toggleBtn} type="button" onClick={toggleStart}>
      {startTimer ? "PAUSE" : "START"}
    </button>
  );

  const breakBtn = (
    <button className={classes.toggleBtn} onClick={toggleStart}>
      {startTimer ? "PAUSE" : "START"}
    </button>
  );

  const dynamicButton = focusState ? focusBtn : breakBtn;

  const pinkBar = {
    background: `conic-gradient(rgb(253, 40, 86) ${
      focusPercentage * 3.6
    }deg, rgb(32, 32, 54) 0deg)`,
  };

  const greenBar = {
    background: `conic-gradient(rgb(8, 236, 8) ${
      breakPercentage * 3.6
    }deg, rgb(32, 32, 54) 0deg)`,
  };

  return (
    <div className={classes.display}>
      <div
        className={classes.progressBar}
        style={focusState ? pinkBar : greenBar}
      ></div>

      <div className={classes.mainHolder}>
        {focusState ? <span>FOCUS</span> : <span>BREAK</span>}
        {showTime}
        {timeCounter > 0 ? (
          dynamicButton
        ) : (
          <button className={classes.toggleBtn} onClick={openModalHandler}>
            SETTINGS
          </button>
        )}
      </div>
    </div>
  );
};

export default Display;
