import Task from "./Task";
import Style from "./posttask.module.css";
import {PlusCircle} from "@phosphor-icons/react"

export default function PostTask(){
       return (
         <div className={Style.Post}>
           <form className={Style.form}>
             <textarea
               className={Style.form}
               placeholder="Adicione uma nova tarefa"
             ></textarea>
             <aside>
               <button type="submit">
                 Criar <PlusCircle size={20} weight="bold" />
               </button>
             </aside>
           </form>
           <Task />
         </div>
       );
}