import Style from "./posttask.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Task from "./Task";
import TaskEmpty from "./TaskEmpty";


export default function PostTask() {
  const [taskLists, setTaskLists] = useState([]);
  const [novaTarefaTexto, setNovaTarefaTexto] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function lidarEmCriarNovaTarefa() {
    event.preventDefault();
    setTaskLists([...taskLists, novaTarefaTexto]);
    setNovaTarefaTexto("");
  }

  function LidarComNovaTarefaChange() {
    event.target.setCustomValidity("");
    setNovaTarefaTexto(event.target.value);
  }

  function lidarCheckboxChange() {
    setIsChecked(!isChecked);
  }


  return (
    <div className={Style.Post}>
      <form onSubmit={lidarEmCriarNovaTarefa} className={Style.form}>
        <textarea
          className={Style.form}
          onChange={LidarComNovaTarefaChange}
          placeholder="Adicione uma nova tarefa"
          value={novaTarefaTexto}
          required
        ></textarea>
        <aside>
          <button type="submit">
            Criar <PlusCircle size={20} weight="bold" />
          </button>
        </aside>
      </form>
      <footer>
        <strong>Tarefas criadas</strong>
        <strong>Concluídas</strong>
      </footer>
      {
        taskLists.length === 0 ? <TaskEmpty/> : taskLists.map(tasksLists =>{
          return (
            <Task
              title={tasksLists}
              isCompleted={isChecked}
              handleIsCompleted={lidarCheckboxChange}
            />
          );
        })
      }

    </div>
  );
}
