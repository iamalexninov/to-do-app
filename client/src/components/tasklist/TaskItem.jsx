import styles from './style.module.css';

import { MdEdit as Edit } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { markTaskAsDone } from '../../services/api';

export const TaskItem = ({ task }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = async () => {
    const result = await markTaskAsDone(task.id);
    setChecked(result);
    alert("Task was completed.");
    window.location.reload();
  }

  return (
    <li className={styles.item}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          name={task.title}
          id={task.id}
          checked={checked}
          onChange={handleChange}
        />
        <p>{task.title}</p>
      </div>
      <Link to={`/update/${task.id}`}>
        <Edit size={20} style={{ color: "#9dcae1" }} />
      </Link>
    </li>
  );
};
