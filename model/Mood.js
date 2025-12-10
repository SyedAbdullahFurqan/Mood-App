import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
 email:String,
 img:String
});

export default mongoose.models.Moods || mongoose.model("Moods", userSchema);