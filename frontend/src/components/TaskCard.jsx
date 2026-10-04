function TaskCard({ task }) {
  return (
    <div>
      <span>
        {task.completed ? "✓" : "○"}
      </span>

      <span>{task.title}</span>

      <button>Delete</button>
    </div>
  );
}

export default TaskCard;