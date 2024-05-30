import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Project.css"

export default function RoleEdit() {

  const { id } = useParams();
  // console.log("param", id);
  const navigate = useNavigate();

  const [roleData, setroleData] = useState({
    Name: "",
    discription: "",
    id: "",
  });

  useEffect(() => {
    // console.log("pid", id);
    if (id) {
      axios
        .get(`http://localhost:8888/role/${id}`)
        .then((response) => {
          const data = response.data;
          console.log("data", data);
          setroleData({
            Name: data.Name,
            discription: data.discription,
            id: data._id,
          });
          // setroleData(data);
        })
        .catch((error) => {
          console.error("Error fetching role data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setroleData({ ...roleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/role/${id}`, roleData);
      navigate("/roleget");
    } catch (error) {
      console.error("Error updating role data:", error);
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
          <h5 className="card-title text-center  fw-light ">Edit role Here</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              name="Name"
              id="Name"
              value={roleData.Name}
              onChange={handleChange}
            />
            <label htmlFor="Name">Name</label>
            </div>
           
            <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="discription"
              name="discription"
              id="discription"
              value={roleData.discription}
              onChange={handleChange}
            />
            <label htmlFor="discription">Discription</label>
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
