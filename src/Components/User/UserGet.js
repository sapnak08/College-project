import { useEffect, useState } from "react";
import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "../Project.css"


export default function UserGet() {
    const [data, setData] = useState([]);

    const search = async (key) => {
      console.log("I want to check key : ", key.length);
      if (key.length !== 0) {
        try {
          const result = await axios.get(
            "http://localhost:8888/user/search/" + key
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
        const result = await axios.get("http://localhost:8888/user");
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
        .delete(`http://localhost:8888/user/${id}`)
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
      <h1 className="table-h">User List</h1>
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
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              {/* <th>ROLE ID</th> */}
              <th>LOGIN ID</th>
              {/* <th>PASSWORD</th> */}
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {/* <td>{item._id}</td> */}
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                {/* <td>{item.roleId}</td> */}
                <td>{item.loginId}</td>
                {/* <td>{item.password}</td> */}
                <td>
                  <button type="button" className="btn-edit">
                    <Link to={`/useredit/${item._id}`}>Edit </Link>
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
