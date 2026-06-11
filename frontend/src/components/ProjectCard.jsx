import { ExternalLink, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const ProjectCard = ({ project, fetchProjects, setEditingProject }) => {
  const statusStyles = {
    Active: "bg-green-500/10 text-green-400 border border-green-500/20",
    Planning: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    Paused: "bg-red-500/10 text-red-400 border border-red-500/20",
    Completed: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  };
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // ? HANDLING DELETE PROJECT
  const handleDelete = async () => {
    try {
      await api.delete(`/projects/${project._id}`);

      toast.success("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  // ? HANDLING GITHUB AND DEPLOYMENT URL
  const openLink = (url) => {
    try {
      const validUrl = new URL(url);

      window.open(validUrl.href, "_blank");
    } catch {
      toast.error("Invalid URL");
    }
  };

  return (
    <div
      className="
        bg-[#181825]
        rounded-2xl
        p-6
        border
        border-purple-500/10
        shadow-lg
        shadow-black/30
        hover:-translate-y-1
        hover:border-purple-500/20
        hover:shadow-xl
        hover:shadow-purple-500/10
        transition-all
        duration-300
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-2xl font-bold text-white">
              {project.projectName}
            </h2>

            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <p className="text-gray-500 text-sm mt-2">
            Created At :{" "}
            {new Date(project.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              setEditingProject(project);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="
              w-9 h-9
              rounded-full
              flex items-center justify-center
              text-gray-400
              hover:text-purple-400
              hover:bg-purple-500/10
              transition
            "
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => setShowDeleteModal(true)}
            className="
              w-9 h-9
              rounded-full
              flex items-center justify-center
              text-gray-400
              hover:text-red-400
              hover:bg-red-500/10
              transition
            "
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-gray-300 leading-relaxed">
        {project.projectDesc}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="
              px-3 py-1
              text-sm
              rounded-lg
              bg-[#27273A]
              text-purple-200
              border
              border-purple-500/10
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 mt-5 pt-4">
        {project.githubRepoLink || project.deploymentLink ? (
          <div className="flex flex-wrap gap-6">
            {project.githubRepoLink && (
              <button
                onClick={() => openLink(project.githubRepoLink)}
                className="
                  flex items-center gap-2
                  text-purple-400
                  hover:text-white
                  transition
                "
              >
                <ExternalLink size={18} />
                GitHub
              </button>
            )}

            {project.deploymentLink && (
              <button
                onClick={() => openLink(project.deploymentLink)}
                className="
                  flex items-center gap-2
                  text-purple-400
                  hover:text-white
                  transition
                "
              >
                <ExternalLink size={18} />
                Live Demo
              </button>
            )}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">🚧 Not Published Yet</p>
        )}
      </div>
      {/* Delete Modal */}
      {showDeleteModal && (
        <dialog className="modal modal-open">
          <div className="modal-box bg-[#181825] border border-purple-500/20">
            <h3 className="font-bold text-xl text-white">Delete Project</h3>

            <p className="py-4 text-gray-300">
              Are you sure you want to delete
              <span className="text-purple-400 font-semibold">
                {" "}
                {project.projectName}
              </span>
              ?
            </p>

            <p className="text-sm text-red-400">
              This action cannot be undone.
            </p>

            <div className="modal-action">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  handleDelete();
                  setShowDeleteModal(false);
                }}
                className="btn bg-red-500 border-none hover:bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ProjectCard;
