import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import "./App.css";
import LoginForm from "./LoginForm";

function App() {
  const [students, setStudents] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("/students");
    console.log(result.data);
    setStudents(result.data); // ใส่ค่า Students ที่ได้มาจาก axios เข้าไป
  };

  const ยิงpostman = async () => {
    const body = {
      name: nameValue,
      age: ageValue,
      number: numberValue,
    };

    await axios.post("/students", body);
    alert("ส่งข้อมูลไป Backend เรียบร้อยแล้ว");
    fetchData();
  };

  const deleteStudent = async (id) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
    };

    await axios.delete(`/students/${id}`, {
      headers: headers,
    });

    alert(`student id: ${id} has been deleted.`);
    fetchData();
  };

  return (
    <div
      className="App"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
      <h1>รายชื่อนักเรียน</h1>
      {students.map((student) => (
        <div
          style={{ margin: "5px", width: "50%", border: "1px solid #000000" }}
        >
          <div>ชื่อ: {student.name}</div>
          <div>อายุ: {student.age}</div>
          {isLogin ? (
            <button onClick={() => deleteStudent(student.id)}>ลบ</button>
          ) : null}
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
