import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Project.css";

export default function RolePost() {
  const [roleData, setroleData] = useState({
    Name: "",
    discription: "",
  });
  // console.log("user data", roleData);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");


  const handleReset = () => {
    setroleData({
      Name: "",
      discription: "",
    });
    setMessage("");
    setMsg("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/role", roleData)
      .then((response) => {
        // console.log("response", response.data.message);
        if (
          !roleData.Name ||
          !roleData.discription
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
        // setroleData({ ...roleData, msg: "I am catch error /  Server down" });
      });
  };

  const nameFun = (event) => {
    console.log("first", event.target.value);
    const { name, value } = event.target;
    setroleData({ ...roleData, [name]: value });
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
            <h3 className="text-center w-100">Add Role Here</h3>
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
                    name="Name"
                    id="Name"
                    value={roleData.Name}
                    onChange={nameFun}
                    required
                  />
                </div>
                {error && !roleData.Name && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Discription"
                    name="discription"
                    id="discription"
                    value={roleData.discription}
                    onChange={nameFun}
                  />
                </div>
                {error && !roleData.discription && (
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

