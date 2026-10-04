import { useState } from "react";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Build Task App",
      completed: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;