import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";

import "./TaskPage.css";

export default function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div className="addTask">
        <Link className="addTaskButton" to="/add-task">
          +<p>Añadir tarea</p>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="addTask">
        <Link className="addTaskButton" to="/add-task">
          +<p>Añadir tarea</p>
        </Link>
      </div>
      <div className="taskListContainer">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </>
  );
}
