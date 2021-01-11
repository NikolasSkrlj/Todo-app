import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = ()=> {
      setRefresh(!refresh);
  }
  return (
    <TaskContext.Provider
      value={{
        refreshTasks,
        refresh
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;

