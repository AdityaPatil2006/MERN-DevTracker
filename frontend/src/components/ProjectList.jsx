import EmptyState from "./EmptyState";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, fetchProjects, setEditingProject }) => {
  if (projects.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          fetchProjects={fetchProjects}
          setEditingProject={setEditingProject}
        />
      ))}
    </div>
  );
};

export default ProjectList;
