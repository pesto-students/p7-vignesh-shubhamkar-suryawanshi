import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { todos } from './constants';

const App = () => {
  const [taskList, setTaskList] = useState(todos);
  // new task list is for map
  const [newTaskList, setNewTaskList] = useState(todos);

  function addNewTask() {
    const task = prompt('Enter your new task');
    setTaskList(taskList.push(task));
    setNewTaskList(taskList);
  }

  function deleteTask() {
    console.log('clicked');
  }

  return (
    <div className="App">
      <h1>My ToDo list</h1>
      {newTaskList.map((todo) => (
        <div key={todo} className="mappe">
          <p>{todo}</p>
          <button onClick={deleteTask}>Delete</button>
        </div>
      ))}
      <button onClick={addNewTask}>+ New Task</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
