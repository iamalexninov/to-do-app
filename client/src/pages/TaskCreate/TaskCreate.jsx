import { useState } from "react";
import { createTask } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import styles from "./style.module.css";
import { FaChevronCircleLeft as BackHome } from "react-icons/fa";

export const TaskCreate = () => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    await createTask({
      title,
      dueDate: new Date(dueDate).toISOString() || null,
      isCompleted: false,
    });
    setTitle("");
    setDueDate("");

    alert("Task was created!");
    navigate("/");
  };

  return (
    <>
      <Link className={styles.back_home} to="/">
        <BackHome size={23} color="#9dcae1" />
      </Link>
      <h3 className={styles.title}>create new task</h3>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
    </>
  );
};
