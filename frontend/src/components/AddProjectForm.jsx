import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const AddProjectForm = ({
  fetchProjects,
  editingProject,
  setEditingProject,
}) => {
  // ? HANDLING FORM INPUTS
  const [formData, setFormData] = useState({
    projectName: "",
    projectDesc: "",
    status: "Active",
    techStack: [],
    githubRepoLink: "",
    deploymentLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopularTech, setShowPopularTech] = useState(false);
  const [techInput, setTechInput] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ? HANDLING FORM SUBMISSION

  const isValidUrl = (url) => {
    if (!url.trim()) return true; // optional field

    const pattern =
      /^(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{2,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

    return pattern.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ? BASIC VALIDATION
    if (!formData.projectName.trim()) {
      toast.error("Project name is required");
      return;
    }

    if (!formData.projectDesc.trim()) {
      toast.error("Project description is required");
      return;
    }

    // ? URL VALIDATION

    if (!isValidUrl(formData.githubRepoLink)) {
      toast.error("Please enter a valid GitHub URL");
      return;
    }
    if (!isValidUrl(formData.deploymentLink)) {
      toast.error("Please enter a valid Deployment URL");
      return;
    }

    try {
      setLoading(true);

      if (editingProject) {
        await api.put(`/projects/${editingProject._id}`, formData);
        toast.success("Project updated successfully!");
      } else {
        await api.post("/projects", formData);
        toast.success("Project added successfully!");
      }

      await fetchProjects();
      setEditingProject(null);

      // ? RESET FORM
      setFormData({
        projectName: "",
        projectDesc: "",
        status: "Active",
        techStack: [],
        githubRepoLink: "",
        deploymentLink: "",
      });

      setTechInput("");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Failed to save project!");
    } finally {
      setLoading(false);
    }
  };

  // ? HANDLING TECH STACK INPUTS
  const handleAddTech = () => {
    if (!techInput.trim()) return;

    const tech = techInput.trim();

    if (
      formData.techStack.some(
        (item) => item.toLowerCase() === tech.toLowerCase(),
      )
    ) {
      setTechInput("");
      return;
    }

    setFormData({
      ...formData,
      techStack: [...formData.techStack, tech],
    });

    setTechInput("");
  };

  // ? HANDLING POPULAR TECH FEATURE
  const popularTechs = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Redux",
    "Firebase",
  ];

  const handlePopularTech = (tech) => {
    if (
      formData.techStack.some(
        (item) => item.toLowerCase() === tech.toLowerCase(),
      )
    ) {
      return;
    }

    setFormData({
      ...formData,
      techStack: [...formData.techStack, tech],
    });
  };

  // ? HANDLING EDITING PROJECT FEATURE
  useEffect(() => {
    if (editingProject) {
      setFormData({
        projectName: editingProject.projectName,
        projectDesc: editingProject.projectDesc,
        status: editingProject.status,
        techStack: editingProject.techStack || [],
        githubRepoLink: editingProject.githubRepoLink,
        deploymentLink: editingProject.deploymentLink,
      });
    }
  }, [editingProject]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#181825] rounded-2xl p-5 border border-purple-500/10 shadow-xl shadow-black/30 h-full lg:h-[calc(100vh-140px)] lg:overflow-y-auto scrollbar-hide">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-5">
          <Plus size={24} color="#A78BFA" />

          <h2 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            {editingProject ? "Edit Project" : "New Project"}
          </h2>
        </div>

        {/* Edit Banner */}
        {editingProject && (
          <div className="mb-5 rounded-xl border border-purple-500/20 bg-purple-500/10 p-3">
            <p className="text-sm text-purple-300">
              ✏️ Editing: {editingProject.projectName}
            </p>
          </div>
        )}

        {/* Project Name */}
        <div className="mb-3">
          <label className="block text-white font-medium mb-2">
            Project Name
          </label>

          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="My awesome project"
            className="input  w-full bg-[#27273A] border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="block text-white font-medium mb-2">
            Description
          </label>

          <textarea
            rows={3}
            name="projectDesc"
            value={formData.projectDesc}
            onChange={handleChange}
            placeholder="Brief description of the project..."
            className="textarea w-full bg-[#27273A] border-white/10 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Status */}
        <div className="mb-3">
          <label className="block text-white font-medium mb-2">Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="select  w-full bg-[#27273A] border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option>Active</option>
            <option>Planning</option>
            <option>Paused</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Tech Stack */}
        <div className="mb-3">
          <label className="block text-white font-medium mb-2">
            Tech Stack
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="Add technology..."
              className="input  flex-1 bg-[#27273A] border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <button
              type="button"
              onClick={handleAddTech}
              className="px-5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:scale-105 transition-all"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {formData.techStack.map((tech, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    techStack: formData.techStack.filter((_, i) => i !== index),
                  })
                }
                className="px-3 py-1 rounded-lg bg-[#27273A] border border-white/10 text-gray-300 text-sm hover:border-red-500 hover:text-red-400 transition"
              >
                {tech} ✕
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowPopularTech(!showPopularTech)}
            className="text-purple-400 text-sm mt-2 hover:underline"
          >
            {showPopularTech ? "Hide popular tech" : "Show popular tech"}
          </button>

          {showPopularTech && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {popularTechs.map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => handlePopularTech(tech)}
                    className="px-3 py-1 rounded-lg border border-purple-500/30 text-purple-300 text-sm hover:bg-purple-500/10 transition"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Github URL */}
        <div className="mb-3">
          <input
            type="text"
            name="githubRepoLink"
            value={formData.githubRepoLink}
            onChange={handleChange}
            placeholder="GitHub URL (optional)"
            className="input  w-full bg-[#27273A] border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Deployment URL */}
        <div className="mb-4">
          <input
            type="text"
            name="deploymentLink"
            value={formData.deploymentLink}
            onChange={handleChange}
            placeholder="Deployment URL (optional)"
            className="input  w-full bg-[#27273A] border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl py-3 text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 transition-all"
        >
          {loading
            ? editingProject
              ? "Updating..."
              : "Adding..."
            : editingProject
              ? "Update Project"
              : "Add Project"}
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
