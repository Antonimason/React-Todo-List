import React, { useState, useRef } from "react";
import "./App.css";
import Calendar from "react-calendar";
import Label from "./Components/Label/Label";
import LocalStorage from "./Context/LocalStorage";
import Success from "./Components/Advice/Success";

function App() {
  const [date, setDate] = useState(new Date());
  const [maintitle, setMaintitle] = useState("");
  const [maindescription, setMaindescription] = useState("");
  const [mainlabel, setMainlabel] = useState("normal");
  const [maindate, setMaindate] = useState("");
  const [id, setId] = useState("");
  const success = useRef();
  const input_task = useRef();
  const textarea = useRef();
  const mandar = () => {
    LocalStorage(maintitle, maindescription, maindate, mainlabel, id);
  };

  return (
    <>
      <div className="main-container">
        <form
          onSubmit={(e) => {
        
            e.preventDefault();
            try {
              success.current.style = "display: flex;";
              setTimeout((e) => {
                success.current.style = "display: none;";
              }, 3000);
              clearTimeout();
              mandar();
              setMaindescription("");
              setMaintitle("");
              setMainlabel("normal");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <div className="app">
            <h4>1. Select your date</h4>
            <div className="calendar-container">
              <Calendar onChange={setDate} minDate={new Date()} value={date} />
            </div>
            <div className="text-center">
              
              <b>Selected date:</b> {date.toDateString()}
            </div>
          </div>

          <div className="form-urgency">
            <h4>2. Select your priority</h4>
            <div className="label-container">
              <div
                className="circle-green circling"
                onClick={() => {
                  setMainlabel("normal");
                }}
              >
                <Label color="green" />
                <p>Normal</p>
              </div>

              <div
                className="circle-blue circling"
                onClick={() => {
                  setMainlabel("medium");
                }}
              >
                <Label color="blue" />
                <p>Medium</p>
              </div>

              <div
                className="circle-red circling"
                onClick={() => {
                  setMainlabel("urgent");
                }}
              >
                <Label color="red" />
                <p>Urgent</p>
              </div>
            </div>
            <p><b>Selected priority:</b> {mainlabel}</p>
          </div>

          <div className="form--contaner">
            <h4>3. Type your task</h4>
            <section className="input-form">
              <label htmlFor="name">Task Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Name"
                ref={input_task}
                value={maintitle}
                onChange={(e) => {
                  setMaintitle(e.target.value);
                }}
              ></input>
            </section>
            <section className="input-form">
              <label htmlFor="why">Description</label>
              <textarea
                type="text"
                id="why"
                required
                placeholder="Description"
                ref={textarea}
                value={maindescription}
                onChange={(e) => {
                  setMaindate(date.toDateString());
                  const newId = new Date().getTime().toString();
                  setId(newId);
                  setMaindescription(e.target.value);
                }}
              ></textarea>
            </section>
            <button id="button-sub" type="submit">
              Submit
            </button>
            <div className="show-success" ref={success}>
              <Success />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
