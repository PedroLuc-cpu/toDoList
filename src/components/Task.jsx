import { useState } from "react";
import Style from "./task.module.css";
import { ClipboardText, Trash } from "@phosphor-icons/react";

export default function Task() {

  return (
    <main>
      <section className={Style.task}>
        <div className={Style.checkList}>
          <input type="checkbox" />
          <p></p>
          <button>
            <Trash size={32} color="#808080" weight="light" />
          </button>
        </div>

        {/* <div className={Style.taskEmpty}>
               <ClipboardText size={100} color="#333333" weight="light" />
               <p>
                 <strong>Você ainda não tem tarefas cadastradas</strong> Crie
                 tarefas e organize seus itens a fazer.
               </p>
             </div> */}
      </section>
    </main>
  );
}
