import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import  bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  savedActivities:[{type:mongoose.Schema.Types.ObjectId,ref:"activities"}],
  

});


export const UserModel = mongoose.model('users', UserSchema);