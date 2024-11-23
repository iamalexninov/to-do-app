import styles from "./style.module.css";

import { Header } from "../../components/header/Header";
import { TaskList } from "../../components/tasklist/TaskList";

import { IoAddCircle as Add } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Home = ({ type }) => {
  return (
    <>
      <h3 className={styles.title}>TO-DO LIST</h3>
      <Header />
      <TaskList type={type} />
      <Link className={styles.add} to="/create">
        <Add size={35} color="#9dcae1" />
      </Link>
    </>
  );
};
