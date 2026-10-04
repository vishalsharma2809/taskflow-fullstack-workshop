import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <h1>TaskFlow</h1>
        <p>Manage your student tasks.</p>

        <AddTask />
        <TaskList />
      </main>
    </>
  );
}

export default App;