import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Project.css"

export default function CollegeEdit() {

  const { id } = useParams();
  // console.log("param", id);
  const navigate = useNavigate();

  const [collegeData, setcollegeData] = useState({
    collegeName: "",
    address: "",
    city: "",
    state: "",
    mobileNo: "",
    id: "",
  });

  useEffect(() => {
    // console.log("pid", id);
    if (id) {
      axios
        .get(`http://localhost:8888/college/${id}`)
        .then((response) => {
          const data = response.data;
          console.log("data", data);
          setcollegeData({
            collegeName: data.collegeName,
            address: data.address,
            city: data.city,
            state: data.state,
            mobileNo: data.mobileNo,
            id: data._id,
          });
          // setcollegeData(data);
        })
        .catch((error) => {
          console.error("Error fetching college data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcollegeData({ ...collegeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/college/${id}`, collegeData);
      navigate("/collegeget");
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
          <h5 className="card-title text-center  fw-light ">Edit college Here</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="College name"
              name="collegeName"
              id="collegeName"
              value={collegeData.collegeName}
              onChange={handleChange}
            />
            <label htmlFor="collegeName">College Name</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              id="city"
              value={collegeData.city}
              onChange={handleChange}
            />
            <label htmlFor="city">City</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              name="address"
              id="address"
              value={collegeData.address}
              onChange={handleChange}
            />
            <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="State"
              name="state"
              id="state"
              value={collegeData.state}
              onChange={handleChange}
            />
            <label htmlFor="state">State</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="mobileNo"
              className="form-control"
              placeholder="Enter mobileNo"
              name="mobileNo"
              id="mobileNo"
              autoComplete="currentmobileNo"
              value={collegeData.mobileNo}
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
