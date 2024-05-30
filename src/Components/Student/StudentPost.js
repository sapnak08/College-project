import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Project.css";

export default function StudentPost() {
  const [studentData, setstudentData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    collegeId: "",
    mobileNo: "",
  });
  // console.log("user data", studentData);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");


  const handleReset = () => {
    setstudentData({
      firstName: "",
      lastName: "",
      emailId: "",
      collegeId: "",
      mobileNo: "",
    });
    setMessage("");
    setMsg("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/student", studentData)
      .then((response) => {
        // console.log("response", response.data.message);
        if (
          !studentData.firstName ||
          !studentData.lastName ||
          !studentData.emailId ||
          !studentData.collegeId ||
          !studentData.mobileNo
        ) {
          setMessage(response.data.message);
          setError(true);
        } else if (response.status === 200) {
          handleReset();
          setMsg("Data sucessfully updated!! ");
        }
      })
      .catch((error) => {
        console.log("I am catch error : ");
        // setstudentData({ ...studentData, msg: "I am catch error /  Server down" });
      });
  };

  const nameFun = (event) => {
    console.log("first", event.target.value);
    const { name, value } = event.target;
    setstudentData({ ...studentData, [name]: value });
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
            <h3 className="text-center w-100">Add Student Here</h3>
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
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    value={studentData.firstName}
                    onChange={nameFun}
                    required
                  />
                </div>
                {error && !studentData.firstName && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                    value={studentData.lastName}
                    onChange={nameFun}
                  />
                </div>
                {error && !studentData.lastName && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="emailId"
                    name="emailId"
                    id="emailId"
                    value={studentData.emailId}
                    onChange={nameFun}
                  />
                </div>
                {error && !studentData.emailId && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="number"
                    name="collegeId"
                    placeholder="collegeId"
                    id="collegeId"
                    value={studentData.collegeId}
                    onChange={nameFun}
                  />
                </div>
                {error && !studentData.collegeId && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="number"
                    name="mobileNo"
                    placeholder="mobileNo"
                    id="mobileNo"
                    value={studentData.mobileNo}
                    onChange={nameFun}
                  />
                </div>
                {error && !studentData.mobileNo && (
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
