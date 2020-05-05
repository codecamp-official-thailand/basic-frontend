import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/students");
    console.log(result.data);
    setStudents(result.data); // ใส่ค่า Students ที่ได้มาจาก axios เข้าไป
  };

  const ยิงpostman = async () => {

    const body = {
      name: nameValue,
      age: ageValue,
      number: numberValue,
    };

    await axios.post("http://localhost:8000/students", body);
    alert("ส่งข้อมูลไป Backend เรียบร้อยแล้ว");
    fetchData();

  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8000/students/${id}`);
    alert(`student id: ${id} has been deleted.`);
    fetchData();
  };

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
          <button onClick={() => deleteStudent(student.id)}>ลบ</button>
        </div>
      ))}
      <h1>Add a student</h1>
      <div>
        Name:
        <input
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>
      <div>
        Age:
        <input value={ageValue} onChange={(e) => setAgeValue(e.target.value)} />
      </div>
      <div>
        Number:
        <input
          value={numberValue}
          onChange={(e) => setNumberValue(e.target.value)}
        />
      </div>
      <button onClick={ยิงpostman}>Add new student</button>
    </div>
  );
}

export default App;
