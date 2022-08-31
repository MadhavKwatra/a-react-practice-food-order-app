import React, { useRef } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    // inputRef.current.
  };
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        // type={props.type}
        // id={props.id}
        // value={props.value}
        onChange={props.onChange}
        {...props.input}
      />
    </div>
  );
});

export default Input;
