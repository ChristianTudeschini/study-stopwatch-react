import React, { useState } from "react";
import Task from "./Task/Task";
import style from "./list.module.scss";

export default function List() {
  const [tasks, setTasks] = useState([
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
    <aside className={style.listTasks}>
      <h2 onClick={() => {
        setTasks([...tasks, {
          name: 'Node.js',
          time: '01:00:00',
        }]);
      }}>
        Lista de estudos
      </h2>
      <ul>
      {tasks.map((task, index) => (
        <Task 
          key={index}
          {...task}
        />
      ))}
      </ul>
    </aside>
  )
}