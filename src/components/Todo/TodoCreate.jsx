import style from "./TodoCreate.module.scss";

function TodoCreate() {
  return (
    <div className={style.todo__create}>
      <sapn className={style.todo__create__button}>+</sapn>
      <h3 className={style.todo__create__text}>Add Task</h3>
    </div>
  );
}

export default TodoCreate;

// rfce
