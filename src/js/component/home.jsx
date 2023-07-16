import React, {useState, useEffect} from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [inputValue, setInputValue ] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);


  // añadir tareas
  function handleNewTask (e) {
    if (e.key === 'Enter' && e.target.value != '') {
      setTodos(todos.concat({ label: e.target.value, done: false }))
      //setCounter(counter + 1)
      let aux = todos.concat({ label: e.target.value, done: false }) //creamos array auxiliar para prevenir el delay en el fetch y los pasamos como parámetro
      setInputValue('')
      setTodoList(aux)
    }
  }

  // eliminar tareas
  function handleEraseTask (id) {
    if (hoverIndex === id) {
      setTodos(todos.filter((item, index) => index !== id))
    }
    //setCounter(counter - 1)
    let aux = todos.filter((item, index) => index !== id) //creamos array auxiliar para prevenir el delay en el fetch y los pasamos como parámetro
    setTodoList(aux)
    // console.log(todos)
  }

    // contar tareas
    function TasksCounter() {
      todos.length
      if (todos.length === 0) return 'No hay tareas, añadir tareas'
      else if (todos.length === 1) return 'Tienes 1 tarea pendiente'
      else return 'Tienes ' + todos.length + ' tareas pendientes'
    }
  
    // fetch para obtener datos de la API
  function getTodoList () {
    fetch('url fetch')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err))
  }

   // añadir o eliminar datos con el fetch
  function setTodoList (lista) {
    // console.log(lista);
    fetch('url fetch', {
      method: 'PUT',
      body: JSON.stringify(lista),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => {
        console.log(resp.ok) // si es true entonces ok
        console.log(resp.status) // devolverá códigos de estado
        console.log(resp.text()) // devolverá el objeto obtenido
        return resp.json() // parsea el resultado como Json
      })
      .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        //resp.status === 200 ? setTodos(data) : setTodoList() // No hace falta validar status
        console.log(data);
      })
      .catch(error => {
        // manejo de errores
        console.log(error)
      })
  }

  // recarga el ToDoList a cada recarga de la página
  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <div className="container">
      <h1>todos</h1>
      <ul>
        <li className="add-tasks">
          <input 
            type="text" 
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            onKeyDown={(event) => {handleNewTask
              // if (event.key === "Enter") {setTodos(todos.concat(inputValue));
              //   setInputValue("");
            //   }
            }
          }
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
