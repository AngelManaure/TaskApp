import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import "./TaskCard.css";

export default function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const handleClick = () => {
    deleteTask(task.id)
  }
  return (
    <article className="TaskCard">
      <div className="topCard">
        <h3>{task.title}</h3>
        <div>
          <button className="deleteButton button" onClick={handleClick}>
            Borrar
          </button>
          <Link className="updateButton button" to={`/tasks/${task.id}`}>Editar</Link>
        </div>
      </div>
      <p>{task.description}</p>
    </article>
  );
}
