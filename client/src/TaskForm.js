import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { TaskContext } from "./TaskContext";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { refreshTasks } = useContext(TaskContext);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        const res = await axios.post(`/api/tasks/create`, {
          desc: task,
        });
        if (res.data.success) {
          setTask("");
          refreshTasks();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="taskForm">
        <Form.Label className="text-muted">Dodaj novi zadatak</Form.Label>
        <Row>
          <Col sm={9}>
            <Form.Control
              type="text"
              value={task}
              onChange={handleChange}
            ></Form.Control>
          </Col>
          <Col sm={3}>
            <Button type="submit" variant="success" block>
              Dodaj
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default TaskForm;
