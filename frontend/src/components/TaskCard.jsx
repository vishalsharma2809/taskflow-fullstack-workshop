function TaskCard({ task, deleteTask }) {
  return (
    <div className="task-card">
      <span>{task.title}</span>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;