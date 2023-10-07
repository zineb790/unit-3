/* eslint-disable no-unused-vars */
import React,{useState ,useEffect}from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

     useEffect(() => {
    axios.get("http://localhost:3001/getUser/"+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
      })
      .catch(err=>console.log(err))
     },[])
    
    const Update = (e) => {
        e.preventDefault();
         axios.put("http://localhost:3001/updateUser/"+id, { name, email, age })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err =>console.log(err))

    }
    return (
        <div className="container"> 
            
            <form onSubmit={Update}  >
                
                <h2 className="edit-user">Edit User</h2>
                
                <div>
                    <label htmlFor="name">Name</label>
                    <br/><br/>
                    <input type="text"  name="name" placeholder="enter name" id="name" defaultValue={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div >
                    <label htmlFor="email">Email</label>
                    <br /><br/>
                    <input type="email" name="email" placeholder="enter email" id="email" defaultValue={email}  onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <br/><br/>
                    <input type="text" name="age" placeholder="enter age" id="age" defaultValue={age} autoComplete="off" onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className="update">update</button>
                
                </form>
                </div>
    
    )
    
}
export default UpdateUser;