"use client";

import { useState } from "react";

export default function Departments() {
  const [activeDept, setActiveDept] = useState("computerScience");

  const renderDepartment = () => {
    switch (activeDept) {
      case "computerScience":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">
              Department of Computer Science
            </h2>
            <img
              src="/images/departments/cs.jpg"
              alt="Computer Science"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              The Computer Science department focuses on programming, software
              development, data structures, AI, and modern computing
              technologies.
            </p>
          </>
        );

      case "commerce":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">
              Department of Commerce
            </h2>
            <img
              src="/images/departments/commerce.jpg"
              alt="Commerce"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              The Commerce department equips students with knowledge in
              accounting, finance, taxation, and business management.
            </p>
          </>
        );

      case "management":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">
              Department of Management Studies
            </h2>
            <img
              src="/images/departments/management.jpg"
              alt="Management"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              This department develops leadership, entrepreneurship, and
              strategic management skills among students.
            </p>
          </>
        );

      case "science":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">
              Department of Basic Sciences
            </h2>
            <img
              src="/images/departments/science.jpg"
              alt="Science"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <p className="text-gray-700">
              The Basic Sciences department strengthens students’ foundation in
              physics, chemistry, and mathematics.
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
        <h3 className="text-lg font-semibold mb-4">Departments</h3>

        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeDept === "computerScience"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setActiveDept("computerScience")}
        >
          Computer Science
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeDept === "commerce"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setActiveDept("commerce")}
        >
          Commerce
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeDept === "management"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setActiveDept("management")}
        >
          Management
        </button>

        <button
          className={`w-full p-3 mb-2 rounded text-left ${
            activeDept === "science"
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setActiveDept("science")}
        >
          Basic Sciences
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-3/4 p-8 bg-white shadow-inner">
        {renderDepartment()}
      </div>
    </div>
  );
}
