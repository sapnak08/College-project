import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Project.css"

export default function StudentEdit() {

  const { id } = useParams();
  // console.log("param", id);
  const navigate = useNavigate();

  const [studentData, setstudentData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    collegeId: "",
    mobileNo: "",
    id: "",
  });

  useEffect(() => {
    // console.log("pid", id);
    if (id) {
      axios
        .get(`http://localhost:8888/student/${id}`)
        .then((response) => {
          const data = response.data;
          console.log("data", data);
          setstudentData({
            firstName: data.firstName,
            lastName: data.lastName,
            emailId: data.emailId,
            collegeId: data.collegeId,
            mobileNo: data.mobileNo,
            id: data._id,
          });
          // setstudentData(data);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/student/${id}`, studentData);
      navigate("/studentget");
    } catch (error) {
      console.error("Error updating student data:", error);
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
          <h5 className="card-title text-center  fw-light ">Edit student Here</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="College name"
              name="firstName"
              id="firstName"
              value={studentData.firstName}
              onChange={handleChange}
            />
            <label htmlFor="firstName">College Name</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="emailId"
              name="emailId"
              id="emailId"
              value={studentData.emailId}
              onChange={handleChange}
            />
            <label htmlFor="emailId">emailId</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="lastName"
              name="lastName"
              id="lastName"
              value={studentData.lastName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">lastName</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="collegeId"
              name="collegeId"
              id="collegeId"
              value={studentData.collegeId}
              onChange={handleChange}
            />
            <label htmlFor="collegeId">collegeId</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="mobileNo"
              className="form-control"
              placeholder="Enter mobileNo"
              name="mobileNo"
              id="mobileNo"
              value={studentData.mobileNo}
              onChange={handleChange}
            />
            <label htmlFor="mobileNo">Mobile No</label>
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
