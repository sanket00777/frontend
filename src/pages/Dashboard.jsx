import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = ({ setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const tasks = [
    {
      title: "Team Meeting",
      description: "Conduct weekly sync-up with team members",
      status: "Pending",
    },
    {
      title: "Project Planning",
      description: "Prepare project roadmap and milestones",
      status: "In Progress",
    },
    {
      title: "Review Reports",
      description: "Analyze monthly performance reports",
      status: "Completed",
    },
    {
      title: "Client Follow-up",
      description: "Call client for project feedback",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar handleLogout={handleLogout} />

      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Manager Dashboard
        </h2>
        <p className="text-gray-600 mb-6">
          Tasks assigned to you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-5"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {task.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {task.description}
              </p>
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full ${
                  task.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : task.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
