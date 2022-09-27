import React, { useState } from "react";
import Modal from "../../UI/Modal";
import classes from "./settings.module.css";

const Settings = (props) => {
  // const [openModal, setOpenModal] = useState(false);
  const [fTime, setFTime] = useState(0);
  const [bTime, setBTime] = useState(0);
  const [lbTime, setLBTime] = useState(0);
  const [intervals, setIntervals] = useState(0);
  const [rAmount, setRAmount] = useState(0);
  const [lAmount, setLAmount] = useState(0);

  //   setTotalLaps,
  //   setTotalReps,
  //   setShortBreak,
  //   setLongBreak,
  //   setTotalFocusTime,
  //   setIntervalsBeforeLongBreak

  const submitPomodoroSettings = (e) => {
    e.preventDefault();
    if (
      fTime > 0 &&
      bTime > 0 &&
      lbTime > 0 &&
      intervals > 0 &&
      rAmount > 0 &&
      lAmount > 0
    ) {
      props.setFocusState(true);
      props.setRepCounter(0);
      props.setTotalFocusTime(fTime);
      props.setShortBreak(bTime);
      props.setLongBreak(lbTime);
      props.setIntervalsBeforeLongBreak(intervals);
      props.setConstantIntervals(intervals);
      props.setTotalReps(rAmount);
      props.setTotalLaps(lAmount);
      props.setTimeCounter(fTime * 60);
      props.openModalHandler();
    } else {
      alert("Please fill all fields with number bigger than 0 :-)");
    }
  };

  return (
    <>
      {props.openModal && (
        <Modal openModalHandler={props.openModalHandler}>
          <form className={classes.modalForm} onSubmit={submitPomodoroSettings}>
            <div className={classes.modalColumn}>
              <legend>Focus Time</legend>
              <input
                name="focus"
                placeholder="Set your time for focus"
                type="number"
                onChange={(e) => setFTime(e.target.value)}
              />
            </div>
            <div className={classes.modalColumn}>
              <legend>Short Break Time</legend>
              <input
                name="shortBreak"
                placeholder="Set your time for short break"
                type="number"
                onChange={(e) => setBTime(e.target.value)}
              />
            </div>
            <div className={classes.modalColumn}>
              <legend>Long Break Time</legend>
              <input
                name="longBreak"
                placeholder="Set your time for long break"
                type="number"
                onChange={(e) => setLBTime(e.target.value)}
              />
            </div>
            <div className={classes.modalColumn}>
              <legend>Intervals Before Long Break</legend>
              <input
                name="intervalsBeforeLongBreak"
                placeholder="Set number of intervals before long break"
                type="number"
                onChange={(e) => setIntervals(e.target.value)}
              />
            </div>
            <div className={classes.modalColumn}>
              <legend>Total Reps</legend>
              <input
                name="reps"
                placeholder="Set amount of total reps"
                type="number"
                onChange={(e) => setRAmount(e.target.value)}
              />
            </div>
            <div className={classes.modalColumn}>
              <legend>Total Laps</legend>
              <input
                name="laps"
                placeholder="Set amount of total laps"
                type="number"
                onChange={(e) => setLAmount(e.target.value)}
              />
            </div>
            <button type="submit" id={classes.settingsBtn}>
              Submit
            </button>
          </form>
        </Modal>
      )}
      <button className={classes.settings} onClick={props.openModalHandler}>
        <i className="fa-solid fa-gear"></i>
      </button>
    </>
  );
};

export default Settings;
