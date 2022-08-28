import Card from "../Card/Card";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={styles.modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Modal;
