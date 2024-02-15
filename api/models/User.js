import mongoose, { model } from "mongoose";

const UserShema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = model("User", UserShema);
export default User;
