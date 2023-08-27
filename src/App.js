import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Documentos",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default App;
