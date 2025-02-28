import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [inputText, setInputText] = useState("");

  // ✅ Load from localStorage on app start
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage only when `items` change
  useEffect(() => {
    console.log("💾 Saving to LocalStorage:", items);
    if (items.length > 0) {
      localStorage.setItem("todos", JSON.stringify(items));
    }
  }, [items]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText("");
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  }

  function refreshList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);  // ✅ Clears UI but does not delete storage
      localStorage.removeItem("todos");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1 onClick={refreshList} style={{ cursor: "pointer" }}>To-Do List</h1>
      </div>

      <InputArea inputText={inputText} handleChange={handleChange} addItem={addItem} />

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
