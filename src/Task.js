import React, { useState } from "react";
import Card from "./Components/Card/Card";
import { MdDeleteOutline } from "react-icons/md";
import "./Task.css";

function Task() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("Filter");
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  const updateValue = (e) => {
    setFilter(e);
  };
  //--------------------ordenandolo por fecha-------------------
  if (JSON.length > 0) {
    tasks.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }
  //---------------si detecta que existe task entonces desempaqueta para crear las tareas una por una--------------------------
  if (tasks) {
    let hui = [];
    console.log(task);
    switch (filter) {
      case "Filter":
        tasks.map(task => hui.push(
          <Card
            label={task.label}
            name={task.title}
            task={task.description}
            date={task.date}
            key={task.id}
            image={<MdDeleteOutline />}
          />
        ))
        break;
      case "Normal":
        let normalito = tasks.filter((task) => task.label === "normal");
        hui = [];
        
        normalito.map(normal => hui.push(
          <Card
            label={normal.label}
            name={normal.title}
            task={normal.description}
            date={normal.date}
            key={normal.id}
            image={<MdDeleteOutline />}
          />
        ))
        break;
      case "Medium":
        let mediums = tasks.filter((task) => task.label === "medium");
        hui = [];
        mediums.map(medium => hui.push(
          <Card
            label={medium.label}
            name={medium.title}
            task={medium.description}
            date={medium.date}
            key={medium.id}
            image={<MdDeleteOutline />}
          />
        ))
        break;
      case "Urgent":
        let urgents = tasks.filter((task) => task.label === "urgent");
        hui = [];
        urgents.map(urgent => hui.push(
          <Card
            label={urgent.label}
            name={urgent.title}
            task={urgent.description}
            date={urgent.date}
            key={urgent.id}
            image={<MdDeleteOutline />}
          />
        ))
        break;
        default:
          console.log('Sorry, we do not have task to show');
    }

    if (tasks.length > 0)
      return (
        <>
          <div className="selector-container">
            <select
              className="button-bg"
              onChange={(e) => updateValue(e.target.value)}
            >
              <option className="button-bg" value="Filter">
                Filter
              </option>
              <option className="button-bg" value="Normal">
                Normal
              </option>
              <option className="button-bg" value="Medium">
                Medium
              </option>
              <option className="button-bg" value="Urgent">
                Urgent
              </option>
            </select>
          </div>
          <div className="task-box" onClick={(e) => setTask(hui)}>
            {hui}
          </div>
        </>
      );
    else
      return (
        <div className="no-task">
          <h3>There's no task</h3>
        </div>
      );
  } else {
    return (
      <div className="no-task">
        <h3>There's no task</h3>
      </div>
    );
  }
}

export default Task;
