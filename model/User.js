import mongoose from "mongoose";

const MoodSchema = new mongoose.Schema(
  {
emails: { type: String },
    moodss: { type: String, required: true },
  Imges: { type: String, default: "" },
    

    movies: {
      type: [Object],   // Array of objects
      default: [],
    },

    quotes: {
      type: [Object],
      default: [],
    },

    songs: {
      type: [Object],
      default: [],
    }
  },
  { timestamps: true }
);

export default mongoose.models.Userss || mongoose.model("Userss", MoodSchema);
