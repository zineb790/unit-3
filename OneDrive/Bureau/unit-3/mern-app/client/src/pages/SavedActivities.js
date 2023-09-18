import { useEffect, useState } from "react";
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID.js";



export default function SavedActivities() {

    const [savedActivities, setSavedActivities] = useState([]); 
    const userID = useGetUserID();

    useEffect(() => {


        const fetchSavedActivities = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/activities/savedActivities/${userID}`);
                setSavedActivities(response.data.savedActivities);
            } catch (err) {
                console.log(err);
            }
        }
        
            fetchSavedActivities();
       
    },[userID]);
    return (
        <div>
            <h1> Saved Activities</h1>
            <ul>
                {savedActivities.map((activity) =>(
                    <li key={activity._id}>
                        <div>
                            <h2>{activity.name}</h2>
                            <button>delete</button>
                            <button>update</button>
                        </div>
                        <div>
                            <p>{activity.description}</p>
                        </div>
                        <img src={activity.imageUrl}  alt={activity.name}/>
                        <p>Activity Time: {activity.activityTime} min</p>
                </li>
                
                ))}
            </ul>
        </div>
    )
}

 