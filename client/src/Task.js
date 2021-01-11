import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Task = ({ task, refreshTasks }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleChange = async () => {
    try {
      const res = await axios.put(`/api/tasks/confirm/${task._id}`);
      if (res.data.success) {
        setIsCompleted(!isCompleted);
        console.log("completed je");
        refreshTasks();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/tasks/${task._id}`);
      if (res.data.success) {
        refreshTasks();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex">
      <Form.Check
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
        label={task.desc}
      />
      <Button
        variant="link"
        className="text-danger ml-auto"
        size="sm"
        onClick={handleDelete}
      >
        Izbriši
      </Button>
    </div>
  );
};

export default Task;
