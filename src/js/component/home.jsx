import React, {useState} from "react";

const Home = () => {
  const [ inputValue, serInputValue] = useState("")
  const [ todos, setTodos] = useState([])

  const 

  return {
      <div className="container">
        <h1>My Todos</h1>
          <ul>
            <li>
                <input
                  type="text"
                  onChange={(e) => setInputValue(e.target.velue)} 
                  value={inputValue}
                  KeyPress={(e) => {
                      if (e.Key === "Enter") {
                          setTodos(todos.concat(inputValue));
                          setInpuValue("");
                      }
                  }}
                  placeholder="What to do?"></input>
            </li>
            {todos.map((item, index) => (
              <li>
                {item} 
                <i 
                  class="fas fa-solid fa-xmark" 
                  onClick={() => 
                    setTodos(
                      todos.filter(
                        (t, currentIndex) => 
                          index != currentIndex
                      )
                    )
                }></i>
              </li>
            ))}
            </ul>
          <div>{todos.length} tasks</div>
      </div>
  }
}

export default Home;

























// import React, { useState } from "react";

// const Home = () => {
//   const [tasks, setTasks] = useState("");
//   const [newTask, setNewTask] = useState([]);

//   function handleTask(event) {
//     if (event.key === "Enter") {
//       setNewTask([...newTask, tasks]);
//       setTasks("");
//     }
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={tasks}
//         onChange={(event) => setTasks(event.target.value)}
//         onKeyDown={handleTask}
//       />
//       {newTask.length === 0 ? (
//         <p>No hay tareas, añadir tareas</p>
//       ) : (
//         newTask.map((task, index) => <p key={index}>{task}</p>)
//       )}
//     </div>
//   );
// };

// export default Home;

