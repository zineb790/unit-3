import { useEffect, useState } from "react";
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID.js";



export default function Home() {

    const [activities, setActivities] = useState([]);
    const userID = useGetUserID();

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get("http://localhost:3001/activities");
                setActivities(response.data)
               
            } catch (err) {
                console.error(err)
            }
        };
        fetchActivities();
       
    }, [userID]);

    return (
        <div>
            <h1>Activities</h1>
            <ul>
                {activities.map((activity) =>(
                    <li key={activity._id}>
                        <div>
                            <h2>{activity.name}</h2>
                            <button >save</button>
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

