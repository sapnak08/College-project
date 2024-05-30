import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Project.css";

export default function CollegePost() {
  const [collegeData, setcollegeData] = useState({
    collegeName: "",
    address: "",
    city: "",
    state: "",
    mobileNo: "",
  });
  // console.log("user data", collegeData);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");


  const handleReset = () => {
    setcollegeData({
      collegeName: "",
      address: "",
      city: "",
      state: "",
      mobileNo: "",
    });
    setMessage("");
    setMsg("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/college", collegeData)
      .then((response) => {
        // console.log("response", response.data.message);
        if (
          !collegeData.collegeName ||
          !collegeData.address ||
          !collegeData.city ||
          !collegeData.state ||
          !collegeData.mobileNo
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
        // setcollegeData({ ...collegeData, msg: "I am catch error /  Server down" });
      });
  };

  const nameFun = (event) => {
    console.log("first", event.target.value);
    const { name, value } = event.target;
    setcollegeData({ ...collegeData, [name]: value });
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
            <h3 className="text-center w-100">Add College Here</h3>
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
                    placeholder="College Name"
                    className="form-control"
                    name="collegeName"
                    id="collegeName"
                    value={collegeData.collegeName}
                    onChange={nameFun}
                    required
                  />
                </div>
                {error && !collegeData.collegeName && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Address"
                    name="address"
                    id="address"
                    value={collegeData.address}
                    onChange={nameFun}
                  />
                </div>
                {error && !collegeData.address && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="City"
                    name="city"
                    id="city"
                    value={collegeData.city}
                    onChange={nameFun}
                  />
                </div>
                {error && !collegeData.city && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="state"
                    placeholder="State"
                    id="state"
                    value={collegeData.state}
                    onChange={nameFun}
                  />
                </div>
                {error && !collegeData.state && (
                  <div style={{ color: "red" }}>{message}</div>
                )}
                <div className="form-group pb-3">
                  <input
                    className="form-control"
                    type="number"
                    name="mobileNo"
                    placeholder="Mobile No."
                    id="mobileNo"
                    value={collegeData.mobileNo}
                    onChange={nameFun}
                  />
                </div>
                {error && !collegeData.mobileNo && (
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

