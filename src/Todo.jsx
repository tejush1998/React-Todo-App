// Todo.js
import "./App.css";
import { useState, useRef } from "react";
import TodoChild from "./TodoChild.jsx";

function Todo() {
  const [data, setData] = useState({});
  const inputRef = useRef(null);

  const addData = (newData) => {
    const index = Math.floor(1000 * Math.random());
    const newObject = {
      [index]: newData,
    };
    newData && setData({ ...data, ...newObject });
  };
  const setStateData = (newData) => {
    setData(newData);
  };

  return (
    <div id="root">
      {console.log("re render")}
      <TodoChild data={data} setStateData={setStateData} />
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          addData(inputRef.current.value);
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default Todo;
