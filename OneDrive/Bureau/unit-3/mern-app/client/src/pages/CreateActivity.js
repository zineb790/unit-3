import { useState } from "react";
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID.js";
import { useNavigate } from 'react-router-dom';



export default function CreateActivity() {
    const userID = useGetUserID();
     
    const [activity, setActivity] = useState({
        name: "",
        description: "",
        imageUrl: "",
        activityTime: 0,
        userOwner: userID,
    });
    const navigate = useNavigate();
   
    const handleChange = (event) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/activities", activity
            );
            alert("Activity Created!");
            navigate("/");
        } catch (err) {
            console.error(err)
        }
    };
        
    return (
        <div className="create-activity">
            <h2>Create Activity</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={activity.name}
                onChange={handleChange}  />

                <label htmlFor="description" name="description">Description</label>
                <textarea id="description" name="description" value={activity.description} onChange={handleChange}></textarea>

                <label htmlFor="imageUrl">image Url</label>
                <input type="text" id="imageUrl" name="imageUrl"
                 value={activity.imageUrl} onChange={handleChange} />

                <label htmlFor="activityTime">Activity Time (min)</label>
                <input type="number" id="activityTime" name="activityTime"
                       value={activity.activityTime}
                    onChange={handleChange} />
                <button type="submit"> Add activity</button>
            </form>

        </div>
    )
}
