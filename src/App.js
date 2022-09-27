import React, { useEffect, useState } from "react";
import classes from "./app.module.css";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import States from "./components/states/States";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [totalLaps, setTotalLaps] = useState(4);
  const [lapCounter, setLapCounter] = useState(0);
  const [totalReps, setTotalReps] = useState(8);
  const [repCounter, setRepCounter] = useState(0);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(30);
  const [totalBreakTime, setTotalBreakTime] = useState(5);
  const [totalFocusTime, setTotalFocusTime] = useState(20);
  const [timeCounter, setTimeCounter] = useState(totalFocusTime * 60);
  const [startTimer, setStartTimer] = useState(false);
  const [focusState, setFocusState] = useState(true);
  const [intervalsBeforeLongBreak, setIntervalsBeforeLongBreak] = useState(4);
  const [constantIntervals, setConstantIntervals] = useState(4);
  const [currentActiveState, setCurrentActiveState] = useState("focus");

  useEffect(() => {
    let timer;
    // if its focus/work time
    if (startTimer && repCounter <= totalReps && focusState) {
      timer = setInterval(() => {
        setTimeCounter(timeCounter - 1);
      }, 1000);

      if (timeCounter === -1) {
        setTotalBreakTime(shortBreak);
        setTimeCounter(shortBreak * 60);
        if (repCounter === parseInt(intervalsBeforeLongBreak)) {
          setTotalBreakTime(longBreak);
          setTimeCounter(longBreak * 60);
          setIntervalsBeforeLongBreak(
            (prev) => parseInt(prev) + parseInt(constantIntervals)
          );
        }
        setStartTimer(false);
        setFocusState(false);
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }

    // if its break time
    if (startTimer && repCounter <= totalReps && !focusState) {
      timer = setInterval(() => {
        setTimeCounter(timeCounter - 1);
      }, 1000);

      if (timeCounter === -1) {
        setRepCounter((prev) => prev + 1);
        setTimeCounter(totalFocusTime * 60);
        setFocusState(true);
        setStartTimer(false);
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }

    if (repCounter > totalReps) {
      setRepCounter(0);
      setLapCounter((prev) => prev + 1);
      setIntervalsBeforeLongBreak(constantIntervals);
    }

    if (lapCounter > totalLaps) {
      setLapCounter(0);
    }

    if (timeCounter === totalFocusTime * 60 && focusState) {
      setCurrentActiveState("focus");
    } else if (timeCounter === shortBreak * 60 && focusState === false) {
      setCurrentActiveState("short");
    } else if (timeCounter === longBreak * 60 && focusState === false) {
      setCurrentActiveState("long");
    }
  }, [
    totalReps,
    repCounter,
    shortBreak,
    longBreak,
    totalBreakTime,
    totalFocusTime,
    timeCounter,
    startTimer,
    focusState,
    intervalsBeforeLongBreak,
    lapCounter,
    totalLaps,
    constantIntervals,
  ]);

  const toggleStart = () => {
    setStartTimer((prev) => !prev);
  };

  const openModalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div className={classes.app}>
      <h1>pomodoro</h1>
      <States currentActiveState={currentActiveState} />
      <Display
        timeCounter={timeCounter}
        toggleStart={toggleStart}
        startTimer={startTimer}
        totalFocusTime={totalFocusTime}
        focusState={focusState}
        totalBreakTime={totalBreakTime}
        openModalHandler={openModalHandler}
      />

      <Info
        repCounter={repCounter}
        totalReps={totalReps}
        lapCounter={lapCounter}
        totalLaps={totalLaps}
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
    </div>
  );
};

export default App;
