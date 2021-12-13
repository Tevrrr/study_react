import React, { useState } from "react";
import Todolist from "./components/TodoList";
import Myform from "./components/MyForm";
import MySelect from "./components/UI/select/MySelect";
import "./styles/style.css"

function App() {
  const [TodoItems, setTodoItems] = useState([
    {TodoText: "Добавь задание...", id: 1}
  ])
  const [selectedSort, setSelectedSort] = useState('');
  function sortTodo(sort) {
    setSelectedSort(sort);
    setTodoItems([...TodoItems].sort(
      (a,b) =>{ 
        if(typeof a[sort] == "string") return a[sort].localeCompare(b[sort]);
        else {
          if(a[sort]<b[sort]) return -1;
          else if(a[sort]>b[sort]) return 1;
          else return 0;
        }
      }
    )

    )
  }
  function createLineTodo(newLine) {
    setTodoItems([...TodoItems, newLine]);
  }
  function removeLineTodo(id) {
    setTodoItems(TodoItems.filter(p =>p.id !==id));
  }
  return (
    <div className="App">
      <MySelect
        value={selectedSort}
        onChange={sortTodo}
        defaltValue="Сортировка"
        options={[
          {value: "TodoText", text: "По названию"},
          {value: "id", text: "По id"}
        ]}
      />
      <Todolist remove={removeLineTodo} TodoItems={TodoItems}/>
      <Myform create={createLineTodo}>
      </Myform>
      
    </div>
  );
}

export default App;
