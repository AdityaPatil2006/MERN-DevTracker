import Project from "../models/Projects.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.log("Error in Retriving Projects:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project)
      return res.status(404).json({ message: "Project not Found!" });
    res.status(200).json(project);
  } catch (error) {
    console.log("Error in Retriving Project:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const createProject = async (req, res) => {
  try {
    const {
      projectName,
      projectDesc,
      techStack,
      status,
      githubRepoLink,
      deploymentLink,
    } = req.body;
    const project = new Project({
      projectName,
      projectDesc,
      techStack,
      status,
      githubRepoLink,
      deploymentLink,
    });

    const savedProject = await project.save();
    res.status(200).json(savedProject);
  } catch (error) {
    console.log("Error in Creating Project", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const updateProject = async (req, res) => {
  try {
    const {
      projectName,
      projectDesc,
      techStack,
      status,
      githubRepoLink,
      deploymentLink,
    } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        projectName,
        projectDesc,
        techStack,
        status,
        githubRepoLink,
        deploymentLink,
      },
      { returnDocument: "after" },
    );
    if (!updatedProject)
      return res.status(404).json({ message: "Project not Found!" });
    res.status(200).json(updatedProject);
  } catch (error) {
    console.log("Error in Updating Project!");
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject)
      return res.status(404).json({ message: "Project not Found!" });
    res.status(200).json({ message: "Project Deleted Successfully!" });
  } catch (error) {
    console.log("Error in Deleting Project!");
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
