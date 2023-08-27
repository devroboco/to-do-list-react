import React from "react";

import Button from "./Button";

import "./AddTask.css";

const AddTask = () => {
  return (
    <div className="add-task-container">
      <input className="add-task-input" type="text" />
      <div className="add-task-button-container">
        <Button>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
