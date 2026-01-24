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
            <h2 className="text-2xl font-bold mb-3">
              About Alva’s Education Foundation
            </h2>
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

      case "dean":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Dean’s Message</h2>
            <p className="text-gray-700">
              As Dean, my vision is to foster academic integrity, professional
              competence, and ethical values among students while promoting
              research and innovation.
            </p>
          </>
        );

      case "visionMission":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Vision & Mission</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                To become a center of excellence in education and research.
              </li>
              <li>
                To nurture skilled professionals with ethical and social
                responsibility.
              </li>
              <li>
                To promote innovation, leadership, and lifelong learning.
              </li>
            </ul>
          </>
        );

      case "codeOfConduct":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Code of Conduct</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Maintain discipline and professionalism on campus.</li>
              <li>Respect faculty, staff, and fellow students.</li>
              <li>Adhere to academic integrity and institutional rules.</li>
              <li>Promote a safe and inclusive learning environment.</li>
            </ul>
          </>
        );

      case "objectives":
        return (
          <>
            <h2 className="text-2xl font-bold mb-3">Objectives</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Provide high-quality education and training.</li>
              <li>Encourage research and innovation.</li>
              <li>Develop leadership and professional skills.</li>
              <li>Contribute to societal and national development.</li>
            </ul>
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
        <button className={`tab-btn ${activeTab==="aboutCollege" && "active"}`} onClick={()=>setActiveTab("aboutCollege")}>
          About College
        </button>

        <button className={`tab-btn ${activeTab==="aboutAlvas" && "active"}`} onClick={()=>setActiveTab("aboutAlvas")}>
          About Alva’s
        </button>

        <button className={`tab-btn ${activeTab==="chairman" && "active"}`} onClick={()=>setActiveTab("chairman")}>
          Chairman Message
        </button>

        <button className={`tab-btn ${activeTab==="principal" && "active"}`} onClick={()=>setActiveTab("principal")}>
          Principal Message
        </button>

        <button className={`tab-btn ${activeTab==="dean" && "active"}`} onClick={()=>setActiveTab("dean")}>
          Dean’s Message
        </button>

        <button className={`tab-btn ${activeTab==="visionMission" && "active"}`} onClick={()=>setActiveTab("visionMission")}>
          Vision & Mission
        </button>

        <button className={`tab-btn ${activeTab==="codeOfConduct" && "active"}`} onClick={()=>setActiveTab("codeOfConduct")}>
          Code of Conduct
        </button>

        <button className={`tab-btn ${activeTab==="objectives" && "active"}`} onClick={()=>setActiveTab("objectives")}>
          Objectives
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-3/4 p-8 bg-white shadow-inner">
        {renderContent()}
      </div>

      {/* BUTTON STYLES */}
      <style jsx>{`
        .tab-btn {
          width: 100%;
          padding: 12px;
          margin-bottom: 8px;
          border-radius: 6px;
          text-align: left;
          background: #f3f4f6;
        }
        .tab-btn.active {
          background: #2563eb;
          color: white;
        }
      `}</style>
    </div>
  );
}
