import React from "react";
import { Container, Card } from "react-bootstrap";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";
import TaskContextProvider from "./TaskContext";

function App() {
  return (
    <>
      <Container className="py-5 w-50">
        <Card>
          <Card.Header>
            <Card.Title>Zadatci</Card.Title>
          </Card.Header>
          <Card.Body>
            <TaskContextProvider>
              <TaskForm />
              <hr />
              <Tasks />
            </TaskContextProvider>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;
