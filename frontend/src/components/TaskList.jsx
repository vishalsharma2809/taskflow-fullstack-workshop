import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;