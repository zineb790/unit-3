import  express from "express";
import mongoose from "mongoose";
import { ActivityModel } from "../models/Activities.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

//route 1 
router.get("/", async (req, res) => {
  try {
    const response = await ActivityModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});


// Create a new activity
router.post("/",  async (req, res) => {
  const activity = new ActivityModel(req.body);
  try {
    const response = await activity.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});


router.put("/",  async (req, res) => {
  // {userId ,activityId}
  try {
     const activity = await ActivityModel.findById(req.body.activityID);
     const user = await UserModel.findById(req.body.userID);
    user.savedActivities.push(activity);
    await user.save();
   
    res.json({savedActivities:user.savedActivities});
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedActivities/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedActivities: user?.savedActivities });
  } catch (err) {
    res.json(err)
  }
});

router.get("/savedActivities", async (req, res) => {
  
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedActivities=await ActivityModel.find({_id:{$in :user.savedActivities},})
    res.json({ savedActivities });
  } catch (err) {
    res.json(err)
  }
});



export { router as activitiesRouter };