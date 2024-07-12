import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TasksContext = createContext({});

export function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks-app-stored");
    if (!storedTasks) return [];
    const tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => {
      task.createdAt = new Date(task.createdAt);
      task.updatedAt = new Date(task.updatedAt);
    });
    return tasks;
  });

  const addTask = (task) => {
    setTasks((currentState) => {
      const updatedTasks = [task, ...currentState];
      localStorage.setItem("tasks-app-stored", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (taskId) => {
    setTasks((currentState) => {
      const updatedTasks = currentState.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks-app-stored", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const toggleCompleteTask = (taskId) => {
    setTasks((currentState) => {
      const updatedTasks = currentState.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed, updatedAt: new Date() }
          : task
      );
      localStorage.setItem("tasks-app-stored", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const getTask = (taskId) => {
    return tasks.find((task) => task.id === +taskId);
  };

  const updateTask = (taskId, newAttributes) => {
    setTasks((currentState) => {
      const taskIndex = currentState.findIndex(task => task.id === +taskId);
      const updatedTasks = [...currentState];
      Object.assign(updatedTasks[taskIndex], newAttributes, { updatedAt: new Date() });
      localStorage.setItem("tasks-app-stored", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const TasksStock = {
    tasks,
    addTask,
    deleteTask,
    toggleCompleteTask,
    getTask,
    updateTask,
  };

  return (
    <TasksContext.Provider value={TasksStock}>
      {children}
    </TasksContext.Provider>
  );
}

TasksContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
