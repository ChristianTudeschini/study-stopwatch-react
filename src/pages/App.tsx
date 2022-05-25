import React from 'react';
import List from "../components/List/List";
import Form from '../components/Form/Form'
import Stopwatch from '../components/Stopwatch/Stopwatch';
import style from "./app.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;