import React, { useState } from 'react';
import Header from "./component/Header";
import Form from "./component/Form.js";
import Todolist from './component/Todolist';
import './App.css';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
 