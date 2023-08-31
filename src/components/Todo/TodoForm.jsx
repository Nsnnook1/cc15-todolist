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
  const [isError, setisError] = useState(false);

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log("submit");
  };

  // const [isCancle, setIsCancle] = useState();

  const handleCancel = function (event) {
    props.setIsOpenForm(false)
    console.log("cancle");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder="Task Name" />

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
