import { createContext, useContext, useState } from "react";

import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      return error.message
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
    } catch (error) {
      return error.message
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) {
        setTasks(tasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      return error.message
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data
    } catch (error) {
      return error.message
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task)
    } catch (error) {
      return error.message
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
