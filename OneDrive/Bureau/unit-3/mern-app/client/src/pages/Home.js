import { useEffect, useState } from "react";
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID.js";



export default function Home() {

    const [activities, setActivities] = useState([]);
    const [savedActivities, setSavedActivities] = useState([]);
    const [deleteActivities, setDeleteActivities] = useState([]);
    
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
        //delete
        // const fetchDeleteActivities = async () => {
        //     try {
        //         const response = await axios.delete(
        //             `http://localhost:3001/activities/deleteActivities/ids/${activityID}`);
        //         setDeleteActivities(response.data.deleteActivities);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        fetchActivities();
        fetchSavedActivities();
        // fetchDeleteActivities();
       
    },[userID]);

    const saveActivity = async (activityID) => {
         try {
                const response = await axios.put("http://localhost:3001/activities",{userID,activityID});
                setSavedActivities(response.data.savedActivities);
               
            } catch (err) {
                console.error(err)
            }
    };

    const deleteActivity = async (activityID) => {
         try {
                const response = await axios.delete("http://localhost:3001/activities/ids",{activityID});
                setDeleteActivities(response.data.deleteActivities);
               
            } catch (err) {
                console.error(err)
            }
    };
    const isActivitySaved=(id)=>savedActivities.includes(id)
    return (
        <div>
            <h2>Recently Posted..</h2>
            <ul>
                {activities.map((activity) =>(
                    <li key={activity._id}>
                        <div>
                            <h3>Title : {activity.name}</h3>
                            <button className="save" onClick={() => saveActivity(activity._id)} disabled={isActivitySaved(activity._id)}>{isActivitySaved(activity._id) ? "saved" : "save"}</button>
                            
                            <button className="delete" onClick={() => deleteActivity(activity._id)}>delete</button>
                            <button className="update">update</button>
                        </div>
                        <div>
                            <p><span className="description">
                                Description 
                            </span> :{activity.description}</p>
                        </div>
                        <img src={activity.imageUrl}  alt={activity.name}/>
                        <p>Activity Time: {activity.activityTime} min</p>
                       
                </li>
                
                ))}
            </ul>
        </div>
    )
}

 