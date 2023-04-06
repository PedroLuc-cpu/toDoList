import Style from "./task.module.css";
import { ClipboardText, Trash } from "@phosphor-icons/react";

export default function Task({id, title, isCompleted, handleIsCompleted }) {
  return (
    <main>
      <section className={Style.task}>
        <ul className={Style.checkList}>
          <li key={id} className={Style.inforLista}>
            <input onClick={handleIsCompleted} type="checkbox" />
            <p className={isCompleted ? Style.checked : ""}>{title}</p>
          </li>
          <button>
            <Trash size={32} color="#808080" weight="light" />
          </button>
        </ul>
      </section>{" "}
    </main>
  );
}



