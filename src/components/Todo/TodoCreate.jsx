import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import styles from "./TodoCreate.module.scss";
import TodoForm from "./TodoForm";

/*
consition Rendering
- Default : show Button & Text
- Active : show TodoForm 

concept : true ? <Addtask/> : <TodoForm/> 
CC2 - Event Handling
เอา Fn ไปผูกติดกับ UI เพื่อให้ User เป็นคนเรียกใช้ Fn เอง
onClick : ต้แง click ก่อน Fn ถึง run
  - User ทำการคลิก
  - Browser call Fn
  handleClick(eventObj) 
  
CC3 - JS Value ไม่สามารถทำให้ React Rerender ได้ ต้องใช้ state
  
CC4 - React State(1 ใน FN ของกลุ่ม React hook)
const [state,setState] = usestate(initialState:any)
//element 1 : current state
//element 2 : Fn สำหรับ  setState
//เมื่อ state เปลี่ยน FN compo จะrender ใหม่
//render 1 ครั้ง ==  all code runใหม่หมด
  */

//1# Fn component : FC (Render)
function TodoCreate() {
  //Hook Fn
  const [isOpenForm, setIsOprnForm] = useState(false);

  //2# JS FN (Logic)
  const handleClick = function () {
    setIsOprnForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
