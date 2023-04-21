import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState("");
  const [newTask, setNewTask] = useState([]);

  function handleTask(event) {
    if (event.key === "Enter") {
      setNewTask([...newTask, tasks]);
      setTasks("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={tasks}
        onChange={(event) => setTasks(event.target.value)}
        onKeyDown={handleTask}
      />
      {newTask.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        newTask.map((task, index) => <p key={index}>{task}</p>)
      )}
    </div>
  );
};

export default Home;

