import Style from "./posttask.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import style from "./task.module.css";
import { ClipboardText, Trash } from "@phosphor-icons/react";

export default function PostTask({ tasklist }) {

    const [taskLists, setTaskLists] = useState([]);
    const [novaTarefaTexto, setNovaTarefaTexto] = useState("");
    console.log(taskLists);

    function lidarEmCriarNovaTarefa() {
      event.preventDefault();
      setTaskLists([...taskLists, novaTarefaTexto]);
      setNovaTarefaTexto("");

    }

    function LidarComNovaTarefaChange({task}){
      event.target.setCustomValidity("");
      setNovaTarefaTexto(event.target.value)
    }
  return (
    <div className={Style.Post}>
      <form onSubmit={lidarEmCriarNovaTarefa} className={Style.form}>
        <textarea
          className={Style.form}
          onChange={LidarComNovaTarefaChange}
          placeholder="Adicione uma nova tarefa"
          value={novaTarefaTexto}
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
      <section className={style.task}>
        {taskLists.length === 0 ? (
          <div className={Style.taskEmpty}>
            <ClipboardText size={100} color="#333333" weight="light" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> Crie
              tarefas e organize seus itens a fazer.
            </p>
          </div>
        ) : (
          <div className={style.checkList}>
            <input type="checkbox" />
            {tasklist.map((line) => {
              <p>{line.task}</p>;
            })}
            <button>
              <Trash size={32} color="#808080" weight="light" />
            </button>
          </div>
        )}

        {/* <div className={Style.taskEmpty}>
               <ClipboardText size={100} color="#333333" weight="light" />
               <p>
                 <strong>Você ainda não tem tarefas cadastradas</strong> Crie
                 tarefas e organize seus itens a fazer.
               </p>
             </div> */}
      </section>{" "}
    </div>
  );
}
