import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    console.log("Adding task:", title);

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <AddTask onAdd={addTask} />

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <span>
              {task.completed ? "✓" : "○"}
            </span>

            <span>{task.title}</span>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;