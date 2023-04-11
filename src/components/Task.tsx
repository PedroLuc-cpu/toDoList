import Style from "./task.module.css";
import {Trash} from "@phosphor-icons/react";
import { useState } from "react";


interface Task {
  id: number;
  content: string;
  isComplete: boolean;
  onDeleteComment: (content:string) => void;
}





export default function Task({id, content, onDeleteComment, isComplete}:Task) {


    const [isChecked, setIsChecked] = useState(false);

      function lidarCheckboxChange() {
        setIsChecked(!isChecked);
        console.log(isChecked)
      }


  function handleDeleteTasks(){
    onDeleteComment(content);
  }


  return (
    <section className={Style.task}>
      <ul className={Style.checkList}>
        <li key={id} className={Style.inforLista}>
          <label>
            <input
              onChange={lidarCheckboxChange}
              type="checkbox"
              checked={isChecked}
            />
          </label>
          <p>{content}</p>
        </li>
        <button onClick={handleDeleteTasks}>
          <Trash size={32} color="#808080" weight="light" />
        </button>
      </ul>
    </section>
  );
}



