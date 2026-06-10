import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import DashboardPage from "./pages/DashboardPage.jsx";

const App = () => {
  return (
    <div data-theme="business">
      <Toaster />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

export default App;
