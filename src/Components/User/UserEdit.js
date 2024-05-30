import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Project.css"

export default function UserEdit() {

  const { id } = useParams();
  // console.log("param", id);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    loginId: "",
    lastName: "",
    roleId: "",
    password: "",
    id: "",
  });

  useEffect(() => {
    // console.log("pid", id);
    if (id) {
      axios
        .get(`http://localhost:8888/user/${id}`)
        .then((response) => {
          const data = response.data;
          console.log("data", data);
          setUserData({
            firstName: data.firstName,
            loginId: data.loginId,
            lastName: data.lastName,
            roleId: data.roleId,
            password: data.password,
            id: data._id,
          });
          // setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/user/${id}`, userData);
      navigate("/userget");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
   <div className="container">
  <div className="row">
    <div className="col-lg-10 col-xl-9 mx-auto">
      <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
        <div className="card-img-left d-none d-md-flex">
          {/* Background image for card set in CSS! */}
        </div>
        <div className="card-body ">
          <h5 className="card-title text-center  fw-light ">Edit user Here</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              name="lastName"
              id="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter login ID"
              name="loginId"
              id="loginId"
              value={userData.loginId}
              onChange={handleChange}
            />
            <label htmlFor="loginId">Login ID</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter role ID"
              name="roleId"
              id="roleId"
              value={userData.roleId}
              onChange={handleChange}
            />
            <label htmlFor="roleId">Role ID</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              id="password"
              autoComplete="currentPassword"
              value={userData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            </div>
            <div className="d-grid mb-2">
              <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
