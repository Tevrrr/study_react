import React, { useState } from "react";
import Todolist from "./components/TodoList";
import Myform from "./components/MyForm";
import "./styles/style.css"

function App() {
  const [TodoItems, setTodoItems] = useState([
    {TodoText: "Скушоц питсу", id: 1},
    {TodoText: "Скушоц карыну", id: 2},
    {TodoText: "Скушоц картоплю", id: 3},
  ])
  function createLineTodo(newLine) {
    setTodoItems([...TodoItems, newLine]);
  }
  function removeLineTodo(id) {
    setTodoItems(TodoItems.filter(p =>p.id !==id));
  }
  return (
    <div className="App">
      <Todolist remove={removeLineTodo} TodoItems={TodoItems}/>
      <Myform create={createLineTodo}>
      </Myform>
      
    </div>
  );
}

export default App;
