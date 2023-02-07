import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState(['Watch movie', 'Walk around']);

  function deleteTask(todo) {
    setList((todos) => {
      return todos.filter((item) => item !== todo);
    });
  }

  return (
    <div className="App">
      <h1>ToDo list</h1>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add your new task"
      />
      <button
        onClick={() => {
          const newList = [...list, value];
          setList(newList);
        }}
      >
        Add Task
      </button>

      {list.map((todo, index) => (
        <div key={index} className="mappe">
          <p>{todo}</p>
          <button
            onClick={() => {
              deleteTask(todo);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
// Not able to add the task...seraching for solution from Namaste React...

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
