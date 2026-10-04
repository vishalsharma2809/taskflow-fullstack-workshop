import TaskCard from "./TaskCard";

function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Node.js",
      completed: true,
    },
  ];

  return (
    <section>
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </section>
  );
}

export default TaskList;