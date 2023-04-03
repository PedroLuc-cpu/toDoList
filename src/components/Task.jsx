import Style from "./task.module.css";

export default function Task(){
       return (
         <main className={Style.main}>
           <footer>
             <strong>Tarefas criadas</strong>
             <strong>Concluídas</strong>
           </footer>
           
           <section className={Style.task}>
           </section>
         </main>
       );
}