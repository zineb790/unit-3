import  express  from "express";
import cors  from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/users.js';
import { activitiesRouter } from './routes/activities.js';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', userRouter);
app.use('/activities', activitiesRouter);



mongoose.connect("mongodb+srv://hachi:WIxIdAJ2RHE5zlkD@wise.qamfnla.mongodb.net/mern-app?retryWrites=true&w=majority");


app.listen(3001, () => console.log(`server running...`));