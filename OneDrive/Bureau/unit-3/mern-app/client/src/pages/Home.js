import { useEffect, useState } from "react";
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID.js";



export default function Home() {

    const [activities, setActivities] = useState([]);
    const [savedActivities, setSavedActivities] = useState([]);
    
    const userID = useGetUserID();

    useEffect(() => {

        const fetchActivities = async () => {
             try {
        const response = await axios.get("http://localhost:3001/activities");
        setActivities(response.data);
      } catch (err) {
        console.log(err);
            }
        };

        const fetchSavedActivities = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/activities/savedActivities/ids/${userID}`);
                setSavedActivities(response.data.savedActivities);
            } catch (err) {
                console.log(err);
            }
        }
            fetchActivities();
            fetchSavedActivities();
       
    },[userID]);

    const saveActivity = async (activityID) => {
         try {
                const response = await axios.put("http://localhost:3001/activities",{userID,activityID,});
                setSavedActivities(response.data.savedActivities);
               
            } catch (err) {
                console.error(err)
            }
    };
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

 