function TodoItem(props) {
  return(
    <li>
      <span>V {props.completed}</span> {/*  marcar como completado */}
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem};
/* hacer el export nombrados */