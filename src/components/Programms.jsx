"use client";

import { useState } from "react";

export default function StudentPortalSection() {
  const [activeTab, setActiveTab] = useState("academic");

  const renderContent = () => {
    switch (activeTab) {
      case "academic":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Academic</h2>
            <img
              src="/images/academic.jpg"
              alt="Academic"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              This section provides academic schedules, syllabus details,
              examination notifications, curriculum structure, and academic
              guidelines for students.
            </p>
          </>
        );

      case "rules":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">
              Rules and Regulation
            </h2>
            <img
              src="/images/rules.jpg"
              alt="Rules and Regulation"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              This section outlines institutional rules, attendance policies,
              disciplinary guidelines, examination regulations, and the
              student code of conduct.
            </p>
          </>
        );

      case "campus":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">
              Campus Facilities
            </h2>
            <img
              src="/images/campus.jpg"
              alt="Campus Facilities"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              Information about library facilities, hostels, laboratories,
              hospital services, sports infrastructure, and student amenities
              available on campus.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* ================= LEFT SIDEBAR ================= */}
      <div className="w-1/4 bg-white shadow-md p-4">

        <button
          className={`w-full p-3 mb-2 rounded text-left transition ${
            activeTab === "academic"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-50"
          }`}
          onClick={() => setActiveTab("academic")}
        >
          Academic
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left transition ${
            activeTab === "rules"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-50"
          }`}
          onClick={() => setActiveTab("rules")}
        >
          Rules and Regulation
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left transition ${
            activeTab === "campus"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-50"
          }`}
          onClick={() => setActiveTab("campus")}
        >
          Campus Facilities
        </button>
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="w-3/4 p-8 bg-white shadow-inner">
        {renderContent()}
      </div>
    </div>
  );
}
