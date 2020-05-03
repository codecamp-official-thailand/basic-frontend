import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const students = [
    {
      id: 2,
      name: "nuttachai",
      age: 16,
      number_phone: "1150",
    },
    {
      id: 3,
      name: "Nat",
      age: 25,
      number_phone: "1684",
    },
    {
      id: 4,
      name: "Tare",
      age: 24,
      number_phone: "1021",
    },
    {
      id: 5,
      name: "Tle",
      age: 21,
      number_phone: "1401",
    },
  ];

  return (
    <div
      className="App"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {students.map((student) => (
        <div
          style={{ margin: "5px", width: "50%", border: "1px solid #000000" }}
        >
          <div>ชื่อ: {student.name}</div>
          <div>อายุ: {student.age}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
