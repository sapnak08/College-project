import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let auth = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h2 className="m-0 text-primary">
              <i className="fa  fa-graduation-cap text-primary " />
              Dream College
            </h2>
          </Link>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
            {!auth ? (
              <>
            <Link to="/login" className="nav-item nav-link active">
                Login
              </Link>
              
              </>
            ):(
              <>
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  User
                </Link>
                <div className="dropdown-menu fade-down m-0">
                  <Link to="/userpost" className="dropdown-item">
                    Add User
                  </Link>
                  <a href="/userget" className="dropdown-item">
                    User List
                  </a>
                 
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Student
                </Link>
                <div className="dropdown-menu fade-down m-0">
                  <Link to="/studentpost" className="dropdown-item">
                    Add Student
                  </Link>
                  <Link to="/studentget" className="dropdown-item">
                  Student List
                  </Link>
                 
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  College
                </Link>
                <div className="dropdown-menu fade-down m-0">
                  <Link to="/collegepost" className="dropdown-item">
                    Add College
                  </Link>
                  <Link to="/collegeget" className="dropdown-item">
                  College List
                  </Link>
                 
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Role
                </Link>
                <div className="dropdown-menu fade-down m-0">
                  <Link to="/rolepost" className="dropdown-item">
                    Add Role
                  </Link>
                  <Link to="/roleget" className="dropdown-item">
                    Role List
                  </Link>
                 
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Marksheet
                </Link>
                <div className="dropdown-menu fade-down m-0">
                  <Link to="/marksheetpost" className="dropdown-item">
                    Add Marksheet
                  </Link>
                  <Link to="/marksheetget" className="dropdown-item">
                    Marksheet List
                  </Link>
                 
                </div>
              </div>
              <button className="log-btn" onClick={handleLogout}><Link to="/logout">Logout({auth.firstName})</Link></button>
              </>
            )}
              
            </div>
            
            {/* <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
              Join Now
              <i className="fa fa-arrow-right ms-3" />
            </a> */}
          </div>
        </nav>
  )
}
