import { useForm } from "react-hook-form";

import "./TaskFormPage.css";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      try {
       const task = await getTask(params.id)
       setValue('title', task.title)
       setValue('description', task.description)
      } catch (error) {
        return error.message
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
    } else {
      createTask(data);
    }
    navigate("/tasks")
  });

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit} className="taskForm">
        <div className="taskFormInputGroup">
          <label htmlFor="title">Título</label>
          <input type="text" id="title" {...register("title")} autoFocus />
        </div>
        <div className="taskFormInputGroup">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            rows={5}
            {...register("description")}
          ></textarea>
        </div>
        <button className="taskFormButton" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
}
