import { FolderOpen } from "lucide-react";

const EmptyState = ({ message = "No Projects Found" }) => {
  return (
    <div className="bg-[#181825] border border-purple-500/10 rounded-2xl p-12 shadow-lg shadow-black/30">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center mb-5">
          <FolderOpen size={42} className="text-purple-400" />
        </div>

        <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
          {message}
        </h2>

        <p className="text-gray-400 mt-3 max-w-md">
          Your workspace is currently empty. Create a new project and start
          tracking your development journey.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
