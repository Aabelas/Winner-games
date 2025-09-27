import React from "react";

const AppButton = ({ label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`flex-1 m-1 p-4 font-bold text-white rounded-xl shadow-lg`}
    style={{ backgroundColor: color }}
  >
    {label}
  </button>
);

export default AppButton;
