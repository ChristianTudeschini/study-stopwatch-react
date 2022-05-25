import React from "react";
import Button from "../Button/Button";
import style from "./form.module.scss";

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00:00",
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input 
            id="task"
            name="task"
            onChange={event => this.setState({ ...this.state, task: event.target.value })}
            placeholder="O que você quer estudar?"
            type="text"
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            id="time"
            step="1"
            name="time"
            min="00:00:00"
            max="01:40:00"
            onChange={event => this.setState({ ...this.state, time: event.target.value })}
            value={this.state.time}
            type="time" required
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;