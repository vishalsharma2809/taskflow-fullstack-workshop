import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();

      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // POST task
  const addTask = async (title) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      const newTask = await response.json();

      setTasks((prevTasks) => [
        newTask,
        ...prevTasks,
      ]);
    } catch (error) {
      console.error("Error adding task:", error);

      throw error;
    }
  };

  // DELETE task
  const deleteTask = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      setTasks((prevTasks) =>
        prevTasks.filter(
          (task) => task._id !== id
        )
      );
    } catch (error) {
      console.error(
        "Error deleting task:",
        error
      );
    }
  };

  // Fetch tasks when app loads
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <h1>TaskFlow</h1>

        <p>
          Manage your student tasks.
        </p>

        <AddTask onAdd={addTask} />

        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
          />
        )}
      </main>
    </>
  );
}

export default App;