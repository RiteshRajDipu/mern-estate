import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
       }, 
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocL4MjUSP_4REezYbRIx4RMQQ19avGyD6Zg8oYBgN_oiTGUlspI=s96-c"
    },
  }, 
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;