import React from 'react';
import style from './style.module.css';

const TodoComponent = ({ todoItem, todoList, setTodoList }) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter((item)=> item.id !== todoItem.id));   
        console.log(todoItem) 
    };
  return (
    <div className={style.todoitem}>
      <h2 className={style.todoname}>{todoItem.name}</h2>
      <button onClick={deleteTodo} className={style.deletebutton}>
        done
      </button>
    </div>
  );
};

export default TodoComponent;
