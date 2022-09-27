import classes from "./generalUI.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={classes.overlay} onClick={props.openModalHandler}></div>
      <div className={classes.modal}>
        <h2>Settings</h2>
        <span>in minutes</span>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
