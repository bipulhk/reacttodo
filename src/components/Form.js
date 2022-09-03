import React from 'react';
import style from './style.module.css';
import shortid from 'shortid';
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
    // console.log(event.target.value);
    // console.log(todo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, {name:todo, id: shortid.generate()}]);
    console.log(todoList);
    setTodo('');
  };
  return (
    <div className={style.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={style.todoinput}
          placeholder='Add Items'
        ></input>
        <button type='submit' className={style.todobutton}>
          add
        </button>
      </form>
    </div>
  );
};

export default Form;
