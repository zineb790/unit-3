import mongoose from 'mongoose';
// const Schema = mongoose.Schema;
// import  bcrypt from 'bcrypt';


const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
    },
    activityTime: {
        type: Number,
        required:true
    },
    userOwner: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
        // required:true,
    },
   
});


export const ActivityModel = mongoose.model('activities', ActivitySchema);