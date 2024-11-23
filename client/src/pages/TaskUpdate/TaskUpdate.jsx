import { useEffect, useState } from "react";
import { updateTask, getTask } from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./style.module.css";
import { FaChevronCircleLeft as BackHome } from "react-icons/fa";

export const TaskUpdate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      const result = await getTask(id);

      setTitle(result.data.title);
      setDueDate(result.data.dueDate);
    };

    fetchTask();
  }, [id]);

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    await updateTask(id, { title: title, dueDate: dueDate});
    alert("Task updated successfully.");
    navigate("/");
  };

  return (
    <>
      <Link className={styles.back_home} to="/">
        <BackHome size={23} color="#9dcae1" />
      </Link>
      <h3 className={styles.title}>update task</h3>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <input
          type="text"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value || "" )}
          placeholder="Task Title"
          required
        />
        <input
          type="date"
          value={dueDate || ""}
          onChange={(e) => setDueDate(e.target.value || "")}
        />
        <button type="submit">Update Task</button>
      </form>
    </>
  );
};
