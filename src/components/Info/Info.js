import React from "react";
import Settings from "../Settings/Settings";
import classes from "./info.module.css";

const Info = ({
  repCounter,
  totalReps,
  lapCounter,
  totalLaps,
  setTotalLaps,
  setTotalReps,
  setShortBreak,
  setLongBreak,
  setTotalFocusTime,
  setIntervalsBeforeLongBreak,
  setTimeCounter,
  openModal,
  openModalHandler,
  setConstantIntervals,
  setFocusState,
  setRepCounter,
}) => {
  return (
    <div className={classes.info}>
      <div className={classes.infoColumn}>
        <p>Reps</p>
        <span>
          {repCounter} / {totalReps}
        </span>
      </div>
      <Settings
        setTotalLaps={setTotalLaps}
        setTotalReps={setTotalReps}
        setShortBreak={setShortBreak}
        setLongBreak={setLongBreak}
        setTotalFocusTime={setTotalFocusTime}
        setIntervalsBeforeLongBreak={setIntervalsBeforeLongBreak}
        setTimeCounter={setTimeCounter}
        openModal={openModal}
        openModalHandler={openModalHandler}
        setConstantIntervals={setConstantIntervals}
        setFocusState={setFocusState}
        setRepCounter={setRepCounter}
      />

      <div className={classes.infoColumn}>
        <p>Laps</p>
        <span>
          {lapCounter} / {totalLaps}
        </span>
      </div>
    </div>
  );
};

export default Info;
