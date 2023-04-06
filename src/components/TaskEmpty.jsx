import { ClipboardText} from "@phosphor-icons/react";
import Style from "./TaskEmpty.module.css";

export default function TaskEmpty() {
  return (
    <div className={Style.taskEmpty}>
      <ClipboardText size={100} color="#333333" weight="light" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e
        organize seus itens a fazer.
      </p>
    </div>
  );
}
