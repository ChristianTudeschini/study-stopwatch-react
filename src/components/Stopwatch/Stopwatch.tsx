import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from "./stopwatch.module.scss";

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>

      <div className={style.clockWrapper}>
        <Clock />
      </div>

      <Button>Começar</Button>
    </div>

  );
}