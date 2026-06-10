import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      trim: true,
      required: true,
    },
    projectDesc: {
      type: String,
      trim: true,
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Planning", "Paused", "Completed"],
      required: true,
    },
    githubRepoLink: {
      type: String,
      trim: true,
      required: false,
    },
    deploymentLink: {
      type: String,
      trim: true,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
