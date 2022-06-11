import React, { useState } from 'react';
import List from "../components/List/List";
import Form from '../components/Form/Form'
import Stopwatch from '../components/Stopwatch/Stopwatch';
import style from "./app.module.scss";

function App() {
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
    <div className={style.app}>
      <Form setTasks={tasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;