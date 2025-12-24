import mongoose, { Schema, models } from "mongoose";

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requiredSkills: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const Job = models.Job || mongoose.model("Job", JobSchema);
export default Job;
