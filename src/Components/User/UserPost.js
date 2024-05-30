import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Project.css";

export default function UserPost() {
  const [userData, setUserData] = useState({
    firstName: "",
    loginId: "",
    lastName: "",
    roleId: "",
    password: "",
  });
  // console.log("user data", userData);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [priload, setPriload] = useState([]);

  const list = () => {
    axios.get("http://localhost:8888/role").then((resp) => {
      console.log(" list response", resp);
      setPriload(resp.data);
    });
  };

  useEffect(() => {
    list();
  }, []);

  const handleReset = () => {
    setUserData({
      firstName: "",
      loginId: "",
      lastName: "",
      roleId: "",
      password: "",
    });
    setMessage("");
    setMsg("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/user", userData)
      .then((response) => {
        // console.log("response", response.data.message);
        if (
          !userData.firstName ||
          !userData.lastName ||
          !userData.loginId ||
          !userData.password ||
          !userData.roleId
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
        // setUserData({ ...userData, msg: "I am catch error /  Server down" });
      });
  };

  const nameFun = (event) => {
    console.log("first", event.target.value);
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
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
            <h3 className="text-center w-100">Add User Here</h3>
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
                    value={userData.firstName}
                    onChange={nameFun}
                    required
                  />
                </div>
                {error && !userData.firstName && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                    value={userData.lastName}
                    onChange={nameFun}
                  />
                </div>
                {error && !userData.lastName && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="LoginId"
                    name="loginId"
                    id="loginId"
                    value={userData.loginId}
                    onChange={nameFun}
                  />
                </div>
                {error && !userData.loginId && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <select
                    className="form-control"
                    type="text"
                    placeholder="RoleId"
                    name="roleId"
                    id="roleId"
                    // value={userData.roleId}
                    onChange={nameFun}

                    // onClick={nameFun}
                  >
                    <option value={userData.roleId}>Select Name</option>

                    {priload.map((ele, i) => {
                      console.log("element in map :", ele.Name);
                      return (
                        <option
                          className="form-control"
                          key={i}
                          value={ele._id}
                        >
                          {ele.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {error && !userData.roleId && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="pass"
                    autoComplete="currentPassword"
                    value={userData.password}
                    onChange={nameFun}
                  />
                </div>
                {error && !userData.password && (
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
