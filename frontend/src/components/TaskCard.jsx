function TaskCard({ task, deleteTask }) {
  return (
    <div className="task-card">
      <span>
        {task.completed ? "✓ " : "○ "}
        {task.title}
      </span>

      <button onClick={() => deleteTask(task._id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;