import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Project.css"

export default function MarksheetEdit() {

  const { id } = useParams();
  // console.log("param", id);
  const navigate = useNavigate();

  const [marksheetData, setmarksheetData] = useState({
    Name: "",
    studentId: "",
    rollNo: "",
    physics: "",
    chemistry: "",
    maths: "",
    id: "",
  });

  useEffect(() => {
    // console.log("pid", id);
    if (id) {
      axios
        .get(`http://localhost:8888/marksheet/${id}`)
        .then((response) => {
          const data = response.data;
          console.log("data", data);
          setmarksheetData({
            Name: data.Name,
            studentId: data.studentId,
            rollNo: data.rollNo,
            physics: data.physics,
            chemistry: data.chemistry,
            maths: data.maths,
            id: data._id,
          });
          // setmarksheetData(data);
        })
        .catch((error) => {
          console.error("Error fetching marksheet data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setmarksheetData({ ...marksheetData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/marksheet/${id}`, marksheetData);
      navigate("/marksheetget");
    } catch (error) {
      console.error("Error updating marksheet data:", error);
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
          <h5 className="card-title text-center  fw-light ">Edit marksheet Here</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=" name"
              name="Name"
              id="Name"
              value={marksheetData.Name}
              onChange={handleChange}
            />
            <label htmlFor="Name">Name</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="rollNo"
              name="rollNo"
              id="rollNo"
              value={marksheetData.rollNo}
              onChange={handleChange}
            />
            <label htmlFor="rollNo">RollNo</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="studentId"
              name="studentId"
              id="studentId"
              value={marksheetData.studentId}
              onChange={handleChange}
            />
            <label htmlFor="studentId">StudentId</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="physics"
              name="physics"
              id="physics"
              value={marksheetData.physics}
              onChange={handleChange}
            />
            <label htmlFor="physics">Physics</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter chemistry"
              name="chemistry"
              id="chemistry"
              autoComplete="currentchemistry"
              value={marksheetData.chemistry}
              onChange={handleChange}
            />
            <label htmlFor="chemistry">Chemistry</label>
            </div>
            <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter maths"
              name="maths"
              id="maths"
              value={marksheetData.maths}
              onChange={handleChange}
            />
            <label htmlFor="maths">Maths</label>
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
