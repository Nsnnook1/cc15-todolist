import styles from "./Button.module.scss";

// Button(Obj)
// Button({text,active})

export function Button({ text, type, active = true ,onClick}) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return (
    <button className={`${styles.btn} ${btnStyles}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
