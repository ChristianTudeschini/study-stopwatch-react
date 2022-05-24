import React from "react";
import Button from "../Button/Button";
import "./form.scss";

class Form extends React.Component {
  render() {
    return (
      <form className="newTask">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input id="task" name="task" placeholder="O que você quer estudar?" type="text" />
        </div>

        <div className="inputContainer">
          <label htmlFor="time">Tempo</label>
          <input id="time" step="1" name="time" min="00:00:00" max="01:40:00" type="time" required />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;