/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUser/" + id)
      .then(res => {
        console.log(res)
        window.location.reload()
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="container">
      <h1>simple CRUD app</h1>
      <div className="create">
          <Link to="/create" >create</Link>
      </div>
        <div className="parent">
            {
            users.map((user, index) => {
              
              return <div key={index}  >
                 
                  <div> {user.name}</div>
                  <div> {user.email}</div>
                  <div> Age: {user.age}</div>
                  <div>
                  <button className="update"><Link to={`/update/${user._id}`} >update</Link></button> 
                    <button className="delete" onClick={(e) =>handleDelete(user._id)}>Delete</button>
                  </div>
                </div>
              })}
          </div>
       
    </div>
     
    )
    
}
export default Users;