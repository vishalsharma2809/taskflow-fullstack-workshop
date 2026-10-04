import { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    try {
      setLoading(true);

      await onAdd(trimmedTitle);

      setTitle("");
    } catch (error) {
      console.error("Failed to add task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What do you need to do?"
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}

export default AddTask;