import { TodoCounter } from './Components/TodoCount/TodoCounter';  /* importando de un objeto */
import { TodoSearch } from './Components/Search/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { CreateTodoButton } from './Components/CreateButton/CreateTodoButton';
import { TodoItem } from './Components/TodoItem/TodoItem';
import React from 'react';


const defaultTodos =[
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de React', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'Lalala', completed: true},
];

//componente principal
function App() { //los componentes inician con mayuscula
  const [searchValue, setSearchValue] = React.useState(''); /* estado vacio ya que se conectara con el valor del input de los usuarios */
  const[todos, setTodos] = React.useState(defaultTodos); /* como estado inicial ponemos los que ya estan definidos */
  /* las variables se declaran con const */
  const completedTodos = todos.filter(todo => !!todo.completed).length;/* recibimos un todo y debolvemos un completed en true o en false, le ponemos la doble negacion para obtener positivo o negativo */
  const totalTodos = todos.length; /* total de tareas */

  console.log('Los usuarios buscan todos de '+ searchValue);

  return ( //jsx -> javaScript y html
    <>
      <TodoCounter completed={completedTodos} total={25}/>
      <TodoSearch
      /* enviando estado y actualizador de estado */
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {/* insertamos el componente de react dentro de otro */}
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}




export default App;
