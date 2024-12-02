import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
