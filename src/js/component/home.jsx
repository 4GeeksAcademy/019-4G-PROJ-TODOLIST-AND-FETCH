import React, {useState} from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [inputValue, setInputValue ] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input 
            type="text" 
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            onKeyDown={(event) => {
              if (event.key === "Enter") {setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="what"></input>
        </li>
        {todos.map((item, index) => ( 
          <div 
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
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
      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;



// Add into Array --> concat
// Delete from Array  --> filter
// Update --> map
