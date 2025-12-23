import React from "react";

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">
        Internal Management System
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-sm"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
