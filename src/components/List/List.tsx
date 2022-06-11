import Task from "./Task/Task";
import style from "./list.module.scss";
import { TasksInterface } from "../../types/TasksInterface";

export default function List({ tasks }: { tasks: Array<TasksInterface> }) {
  return (
    <aside className={style.listTasks}>
      <h2>Lista de estudos</h2>
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