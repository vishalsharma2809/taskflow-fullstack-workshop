import { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", title);

    if (!title.trim()) {
      console.log("Empty title");
      return;
    }

    onAdd(title.trim());

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What do you need to do?"
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;