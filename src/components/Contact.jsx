"use client";

import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("aboutCollege");

  const renderContent = () => {
    switch (activeTab) {
      case "aboutCollege":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">About the College</h2>
            <img
              src="/images/college.jpg"
              alt="College"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              Alva’s College is committed to excellence in education, research,
              and innovation. The institution provides world-class
              infrastructure and holistic development opportunities.
            </p>
          </>
        );

      case "aboutAlvas":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">About Alva’s Education Foundation</h2>
            <img
              src="/images/alvas.jpg"
              alt="Alvas"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              Alva’s Education Foundation aims to empower students through
              quality education, cultural values, and leadership development.
            </p>
          </>
        );

      case "chairman":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Chairman’s Message</h2>
            <img
              src="/images/chairman.jpg"
              alt="Chairman"
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
            <p className="text-gray-700">
              Education is the foundation of progress. Our goal is to nurture
              students into responsible citizens and professionals.
            </p>
          </>
        );

      case "principal":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Principal’s Message</h2>
            <img
              src="/images/principal.jpg"
              alt="Principal"
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
            <p className="text-gray-700">
              We focus on academic excellence, discipline, and innovation to
              shape the future of our students.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeTab === "aboutCollege" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("aboutCollege")}
        >
          About College
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeTab === "aboutAlvas" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("aboutAlvas")}
        >
          About Alva’s
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeTab === "chairman" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("chairman")}
        >
          Chairman Message
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeTab === "principal" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("principal")}
        >
          Principal Message
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-3/4 p-8 bg-white shadow-inner">
        {renderContent()}
      </div>
    </div>
  );
}
