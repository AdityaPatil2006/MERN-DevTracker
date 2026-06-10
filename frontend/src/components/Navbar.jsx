import { BarChart3 } from "lucide-react";

const Navbar = ({ totalProjects = 0, activeProjects = 0 }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#181825]/80 backdrop-blur-xl border-b border-purple-500/10">
      <div className="px-4 sm:px-6 lg:px-16 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <BarChart3 size={22} className="text-white" />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                DevTracker
              </h1>

              <p className="text-xs sm:text-sm text-gray-400">
                Project Dashboard
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center sm:justify-end items-center gap-5 sm:gap-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {totalProjects}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400">Total Projects</p>
            </div>

            <div className="h-8 sm:h-10 w-px bg-purple-500/20"></div>

            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400">
                {activeProjects}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400">Active</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
