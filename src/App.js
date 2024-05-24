import { TodoCounter } from './Components/TodoCount/TodoCounter';  /* importando de un objeto */
import { TodoSearch } from './Components/Search/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { CreateTodoButton } from './Components/CreateButton/CreateTodoButton';
import { TodoItem } from './Components/TodoItem/TodoItem';



const defaultTodos =[
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de React', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'Lalala', completed: true},
];

//componente principal
function App() { //los componentes inician con mayuscula
  return ( //jsx -> javaScript y html
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
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
