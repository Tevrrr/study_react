import React, { useState } from 'react';
import Mybtn from "./UI/button/MyBtn";
import Myinput from "./UI/input/MyInput";

const Myform = ({create}) => {
  const [inputTodo, setInputTodo] = useState();
  function addNewLine(e) {
    e.preventDefault()
    const newLine = {TodoText:inputTodo, id: Date.now()}
    create(newLine);
    setInputTodo("")
  }
  return (
        <form>
            <Myinput 
                onChange = {e => setInputTodo(e.target.value)}
                value={inputTodo} 
                type="text" 
                placeholder="Название задачи"/>
            <Mybtn onClick={addNewLine}>Добавить</Mybtn>
        </form>
    );
}

export default Myform;
