import Style from "./posttask.module.css";
import TaskEmpty from "./TaskEmpty";
import { PlusCircle } from "@phosphor-icons/react";
import { useState, ChangeEvent, FormEvent } from "react";
import {Trash} from "@phosphor-icons/react";
import Tasks from "./task.module.css";



interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}



export default function PostTask() {
  const [taskLists, setTaskLists] = useState<Task[]>([]);
  const [novaTarefaTexto, setNovaTarefaTexto] = useState("");

  

  function lidarEmCriarNovaTarefa(event: FormEvent) {
    event.preventDefault();

      
    const max = 100


        let task: Task = {id:1, content:"", isCompleted:true};

        if(novaTarefaTexto.length == 0){
          alert("O título da task não pode ser vazio")
        }
        else{
          task ={
            id: Math.random() * max,
            content: novaTarefaTexto,
            isCompleted: false
          }
        }

    setTaskLists(prevTasks => [...prevTasks, task]);
    setNovaTarefaTexto("");
  }

  function LidarComNovaTarefaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNovaTarefaTexto(event.target.value);
  }


  function countCompletedTasks(): number {
  return taskLists.filter((task) => task.isCompleted).length;
}

  function handleToggleTaskCompletion(id:number){
    const taskIndex = taskLists.findIndex((task)=>{
      return task.id === id;
    })

    const tempTasks = [...taskLists]

    tempTasks[taskIndex].isCompleted = !tempTasks[taskIndex].isCompleted
    setTaskLists(tempTasks)

    const completedTaskCount = countCompletedTasks()
  }

  function deleteTaskLists(id:number) {
    const taskIndex = taskLists.findIndex((task) => {
      return task.id === id;
    });



    const newTasks = taskLists.filter((task) => task.id !== id)
    setTaskLists(newTasks);

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
        <strong>
          Tarefas criadas <span>{taskLists.length}</span>
        </strong>
        <strong>
          Concluídas <span>{countCompletedTasks()}</span>{" "}
        </strong>
      </footer>
      {
        taskLists.length === 0 ? (
          <TaskEmpty/>
        ):
        <ul className={Tasks.checkList}>
        {
          taskLists.map(task =>(
            <li className={Tasks.inforLista} key={task.id}>
              <div style={{display:"flex", gap:"8px"}} className={task.isCompleted ? Tasks.completed  : ""}>
                <label>
                  <input 
                  type="checkbox"
                  readOnly
                  checked={task.isCompleted}
                  onClick={()=> handleToggleTaskCompletion(task.id)}
                  />
                </label>
                <p>{task.content}</p>
              </div>
              <button onClick={()=> deleteTaskLists(task.id)}>
              <Trash size={32} color="#808080" weight="light" />
              </button>
            </li>
          ))
        }
      </ul>
      }

    </div>
  );
}


      // {taskLists.length === 0 ? (
      //   <TaskEmpty />
      // ) : (
      //   taskLists.map((tasksLists) => {
      //     return (
      //       <Task
      //         key={tasksLists}
      //         content={tasksLists}
      //         onDeleteComment={deleteTaskLists}
      //       />
      //     );
      //   })
      // )}