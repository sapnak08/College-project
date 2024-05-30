import { useEffect, useState } from "react";
import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "../Project.css"


export default function CollegeGet() {
    const [data, setData] = useState([]);

    const search = async (key) => {
      console.log("I want to check key : ", key.length);
      if (key.length !== 0) {
        try {
          const result = await axios.get(
            "http://localhost:8888/college/search/" + key
          );
          setData(result.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }else{
        apiCalling();
      }
    };
  
    const apiCalling = async () => {
      try {
        const result = await axios.get("http://localhost:8888/college");
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      apiCalling();
    }, []);
  
    const handleDelete = (id) => {
      console.log("handle dlt", id);
  
      axios
        .delete(`http://localhost:8888/college/${id}`)
        .then((response) => {
          console.log("response", response);
          apiCalling();
        })
        .catch((error) => {
          console.log("I am catch error : ", error);
        });
    };
  return (
    <section>
      <h1 className="table-h">College List</h1>
      <div className="search-div">
      <i className="bi bi-search"></i>
        <input
          type="text"
          name="name"
          placeholder="Search by key press"
          onChange={(e) => search(e.target.value)}
        />
      </div>
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              {/* <th>ID</th> */}
              <th>College Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Mobile No.</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {/* <td>{item._id}</td> */}
                <td>{item.collegeName}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.mobileNo}</td>
                <td>
                  <button type="button" className="btn-edit">
                    <Link to={`/collegeedit/${item._id}`}>Edit </Link>
                  </button>
                  <button
                    type="button"
                    className="btn-dlt"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
