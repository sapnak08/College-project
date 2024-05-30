import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Project.css";

export default function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    loginId: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    firstName: "",
    loginId: "",
    lastName: "",
    roleId: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8888/login", state).then((response) => {
      console.log("respone", response);
      try {
        if (!response.data.loginId || !response.data.password) {
          setMsg(response.data.message);
          setError(true);
        } else {
          localStorage.setItem("user", JSON.stringify(response.data));
          setError(false);
          navigate("/");
          if (!response.data) {
            setMsg("no user found");
          } else {
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");
          }
        }
      } catch {
        console.log("error", error);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/user", userData)
      .then((response) => {
        console.log("response", response.data.message);
        if (
          !userData.firstName ||
          !userData.lastName ||
          !userData.loginId ||
          !userData.password ||
          !userData.roleId
        ) {
          setMessage(response.data.message);
          setError(true);
        }
        else if (response.status === 200 ) {
          
            handleReset();
            setMsg("Data sucessfully updated!! ")
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

  const handleReset = (event) => {
    event.preventDefault();
    setUserData({
      firstName: "",
      loginId: "",
      lastName: "",
      roleId: "",
      password: "",
      // msg: "",
      // error: false,
    });
    console.log("reset");
  };

  const myStyle = { color: "red" };
  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              {error && <p style={myStyle}>{msg}</p>}
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                defaultChecked
              />
              <label htmlFor="tab-1" className="tab">
                Login
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    <label htmlFor="loginId" className="label">
                      Login Id
                    </label>
                    <input
                      id="loginId"
                      type="text"
                      className="input"
                      name="loginId"
                      placeholder="Enter your login id"
                      value={state.loginId}
                      onChange={(e) =>
                        setState({ ...state, loginId: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      placeholder="Enter your password"
                      autoComplete="currentPassword"
                      value={state.password}
                      onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="group">
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      defaultChecked
                    />
                    <label htmlFor="check">
                      <span className="icon" /> Keep me Signed in
                    </label>
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      defaultValue="Sign In"
                      onClick={login}
                    />
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    <label htmlFor="firstName" className="label">
                      firstName
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="input"
                      placeholder="Enter your firstName"
                      value={userData.firstName}
                      onChange={nameFun}
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="lastName" className="label">
                      lastName
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="input"
                      placeholder="Enter your lastName"
                      value={userData.lastName}
                      onChange={nameFun}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="loginId" className="label">
                      loginId
                    </label>
                    <input
                      id="loginId"
                      name="loginId"
                      type="email"
                      className="input"
                      placeholder="Enter your loginId"
                      value={userData.loginId}
                      onChange={nameFun}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="roleId" className="label">
                      roleId
                    </label>
                    <input
                      id="roleId"
                      name="roleId"
                      type="text"
                      className="input"
                      placeholder="Enter your roleId"
                      value={userData.roleId}
                      onChange={nameFun}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      password
                    </label>
                    <input
                      name="password"
                      placeholder="Enter your password"
                      type="text"
                      className="input"
                      id="pass"
                      autoComplete="currentPassword"
                      value={userData.password}
                      onChange={nameFun}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      defaultValue="Sign Up"
                      onClick={handleSubmit}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="reset"
                      className="button"
                      defaultValue="Sign Up"
                      onClick={handleReset}
                    />
                  </div>
                  {!error && msg && <p style={{ color: "green",margin:"0",backgroundColor:"white" }}>{msg}&#128077;</p>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
