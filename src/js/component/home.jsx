import React, {useState} from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [inputValue, setInputValue ] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className="container">
      <h1>todos</h1>
      <ul>
        <li className="add-tasks">
          <input 
            type="text" 
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            onKeyDown={(event) => {
              if (event.key === "Enter") {setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What needs to be done?"></input>
        </li>
        {todos.map((item, index) => ( 
          <div 
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            className="new-tasks"
          >
            {item} 
            {hoverIndex === index && (
              <FontAwesomeIcon 
                icon={faXmark} 
                onClick={() => setTodos(todos.filter((todos, currentIndex) => index != currentIndex))}
              />
            )}
          </div>
        ))}
      </ul>
      {todos.length > 0 ? (
        <div className="number-tasks">{todos.length} item left</div>
      ) : (
        <div className="number-tasks">No tasks, add tasks </div>
      )}
      <div className="extrabox1"></div>
      <div className="extrabox2"></div>
    </div>
  );
};

export default Home;



// Add into Array --> concat
// Delete from Array  --> filter
// Update --> map
