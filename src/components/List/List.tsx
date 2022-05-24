import React from "react";
import "./list.scss";

function List() {
  const [tasks, setTasks] = React.useState([
    {
      name: 'React',
      time: '01:00:00',
    },
    {
      name: 'React Native',
      time: '00:30:00',
    },
  ]);

  return (
    <aside className="listTasks">
      <h2>Lista de estudos</h2>
      <ul>
      {tasks.map((task, index) => (
        <li className="item" key={index}>
          <h3> {task.name} </h3>
          <span> {task.time} </span>
        </li>
      ))}
      </ul>
    </aside>
  )
}

export default List;