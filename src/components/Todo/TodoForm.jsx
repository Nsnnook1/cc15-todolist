import styles from "./TodoForm.module.scss";
import { Button } from "../Common/Button/Button";
import { useState } from "react";

/*
props = {
  textSubmit :string
  setIsOpenForm : FN
}

*/
/*
CC1 - Form Handle
-FN ผูกกับ Event ชื่อ OnSubmit
- FN จะถูก browser เรียกใช้ (เมื่อไหร่????) โดยส่ง Parameter มา1 ตัว event Obj
- โดย Default ทุกปุ่มใน <form/> จะทำหน้าที่ submit
- วิธีแก้ ต้องกำหนเ Type ของปุ่ม
  - Type='submit'
  - Type='button'
*/

function TodoForm(props) {
  const [isError, setisError] = useState(true);
  const [taskInput, setTaskInput] = useState("");

  const handleChangeInput = function (event) {
    // console.log("user typing.....", event.target.value);
    if (isError) setisError(false);
    setTaskInput(event.target.value);
  };

  const handleSubmit = function (event) {
    //FormValidation
    //case1 : submit ได้
    //case2 : submit ไม่ได้ => show error!!!
    event.preventDefault();

    if (taskInput.trim() === "") {
      console.log("error");
      setisError(true);
    }
    return;
  };

  const handleCancel = function (event) {
    props.setIsOpenForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={taskInput}
        onChange={handleChangeInput}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            onClick={handleCancel}
            text="Cancel"
            active={false}
            type="button"
          />
          <Button text={props.textSubmit} active={true} type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
