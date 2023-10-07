/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err=>console.log(err))
    }
    return (
        <div className="container">
            <form onSubmit={Submit}>
                <h2>add user</h2>
                <div>
                    <label htmlFor="">Name</label>
                    <br /><br />
                    <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <br /><br />
                    <input type="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <br /><br />
                    <input type="text" placeholder="enter age" onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className="submit">submit</button>
                
            </form>
        </div>
    )
    

}

export default CreateUser; 