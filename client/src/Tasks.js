import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Task from "./Task";
import { TaskContext } from "./TaskContext";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { refresh, refreshTasks } = useContext(TaskContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/tasks`);
        if (res.data.success) {
          setTasks(res.data.tasks);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [refresh]);

  return (
    <>
      {tasks.length ? (
        tasks.map((task) => {
          return (
            <Task key={task._id} task={task} refreshTasks={refreshTasks} />
          );
        })
      ) : (
        <h6 className="text-muted text-center"> Nema preostalih zadataka </h6>
      )}
    </>
  );
};

export default Tasks;
