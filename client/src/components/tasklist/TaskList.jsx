import { useEffect, useState } from "react";

import styles from "./style.module.css";
import { TaskItem } from "./TaskItem";
import { getAllTasks, getOverdueTasks, getPendingTasks } from "../../services/api";

export const TaskList = ({ type }) => {
  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = async () => {
    const result = await getAllTasks()
    setTasks(result.data);
  }
  
  const fetchPendingTasks = async () => {
    const result = await getPendingTasks()
    setTasks(result.data);
  }

  const fetchOverdueTasks = async () => {
    const result = await getOverdueTasks()
    setTasks(result.data);
  }

  useEffect(()=>{
    if(type == 'all')
    {
      fetchAllTasks();
    } else if(type == 'pending') {
      fetchPendingTasks()
    } else if(type == 'overdue') {
      fetchOverdueTasks()
    }
  },[type])

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
};
