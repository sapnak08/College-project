import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Project.css";

export default function MarksheetPost() {
  const [marksheetData, setmarksheetData] = useState({
    name: "",
    studentId: "",
    rollNo: "",
    physics: "",
    chemistry: "",
    maths: "",
  });
  // console.log("user data", marksheetData);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const handleReset = () => {
    setmarksheetData({
      name: "",
      studentId: "",
      rollNo: "",
      physics: "",
      chemistry: "",
      maths: "",
    });
    setMessage("");
    setMsg("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/marksheet", marksheetData)
      .then((response) => {
        console.log("response", marksheetData.studentId);
        if (
          !marksheetData.name ||
          !marksheetData.studentId ||
          !marksheetData.rollNo ||
          !marksheetData.physics ||
          !marksheetData.chemistry ||
          !marksheetData.maths
        ) {
          setMessage(response.data.message);
          setError(true);
        } 
        else if(marksheetData.studentId){
            setMessage("Student id already exist")
            setError(true);
        }
        // if (response.data.message) {
        //     setMessage(response.data.message);
        //     setError(true);
        // }
        else if (response.status === 200) {
          handleReset();
          setMsg("Data sucessfully updated!! ");
        }
      })
      .catch((error) => {
        console.log("I am catch error : ");
        // setmarksheetData({ ...marksheetData, msg: "I am catch error /  Server down" });
      });
  };

  const nameFun = (event) => {
    console.log("first", event.target.value);
    const { name, value } = event.target;
    setmarksheetData({ ...marksheetData, [name]: value });
  };
  return (
    <main className="cd__main">
      {/* Start DEMO HTML (Use the following code into your project)*/}
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              className="img-fluid"
              style={{ minHeight: "100%" }}
              alt=""
            />
          </div>
          <div className="col-md-6 bg-white p-2">
            <h3 className="text-center w-100">Add Marksheet Here</h3>
            {!error && msg && (
              <p
                style={{
                  color: "green",
                  margin: "0 0 0 55px",
                  backgroundColor: "rgb(224, 213, 224)",
                  width: "70%",
                }}
              >
                {msg}&#128077;
              </p>
            )}
            <div className="form-style">
              <form>
                <div className="form-group pb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    id="name"
                    value={marksheetData.name}
                    onChange={nameFun}
                    required
                  />
                </div>
                {error && !marksheetData.name && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="StudentId"
                    name="studentId"
                    id="studentId"
                    value={marksheetData.studentId}
                    onChange={nameFun}
                  />
                </div>
                {error && !marksheetData.studentId && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="RollNo"
                    name="rollNo"
                    id="rollNo"
                    value={marksheetData.rollNo}
                    onChange={nameFun}
                  />
                </div>
                {error && !marksheetData.rollNo && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="physics"
                    placeholder="Physics"
                    id="physics"
                    value={marksheetData.physics}
                    onChange={nameFun}
                  />
                </div>
                {error && !marksheetData.physics && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="number"
                    name="chemistry"
                    placeholder="Chemistry"
                    id="chemistry"
                    value={marksheetData.chemistry}
                    onChange={nameFun}
                  />
                </div>
                {error && !marksheetData.chemistry && (
                  <div style={{ color: "red" }}>{message}</div>
                )}

                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="number"
                    name="maths"
                    placeholder="Maths"
                    id="maths"
                    value={marksheetData.maths}
                    onChange={nameFun}
                  />
                </div>
                {error && !marksheetData.maths && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <input name type="checkbox" defaultValue />{" "}
                    <span className="pl-2 font-weight-bold">Remember Me</span>
                  </div>
                  <div></div>
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* END EDMO HTML (Happy Coding!)*/}
    </main>
  );
}
