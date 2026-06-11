import { useEffect, useState } from "react";
import AddProjectForm from "../components/AddProjectForm.jsx";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import api from "../lib/axios.js";

const DashboardPage = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log("Error in getting Projects!", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchItem.toLowerCase()) ||
      project.projectDesc.toLowerCase().includes(searchItem.toLowerCase());

    const matchesStatus =
      activeFilter === "All" ||
      project.status.toLowerCase() === activeFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const totalProjects = projects.length;

  const activeProjects = projects.filter(
    (project) => project.status.toLowerCase() === "active",
  ).length;

  return (
    <div className="min-h-screen bg-[#0F0F1A]">
      <Navbar totalProjects={totalProjects} activeProjects={activeProjects} />

      <div className="grid lg:grid-cols-[350px_1fr] gap-6 px-6 lg:px-16 py-8">
        {/* Left Side */}
        <div className="lg:sticky lg:top-24 self-start">
          <AddProjectForm
            fetchProjects={fetchProjects}
            editingProject={editingProject}
            setEditingProject={setEditingProject}
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-[#181825] border border-white/5 p-5 shadow-lg shadow-black/20">
            <SearchFilter
              searchItem={searchItem}
              setSearchItem={setSearchItem}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>

          <div className="rounded-2xl bg-[#181825] border border-white/5 p-5 shadow-lg shadow-black/20">
            <ProjectList
              projects={filteredProjects}
              fetchProjects={fetchProjects}
              setEditingProject={setEditingProject}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
