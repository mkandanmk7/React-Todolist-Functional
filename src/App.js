import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const [error, setError] = useState({
    textarea: "",
  });

  const [todos, setTodos] = useState([
    {
      id: 1,
      desc: "Drink Coffee",
      date: new Date("september,12,21"),
      completed: true,
    },
    {
      id: 2,
      desc: "Spend 30min for Cats",
      date: new Date("september,12,21"),
    },
  ]);

  //handle change()

  let handleChange = ({ target: { name, value, type } }) => {
    setTodo(value);
    console.log(name, value, type);
  };

  // handleSubmit()

  let handleSubmit = (event) => {
    console.log("submited");

    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>To do List </h1>
        <textarea
          name="todo"
          value={todo}
          onChange={handleChange}
          rows="2"
        ></textarea>
        <span>{error.textarea}</span>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default App;
