"use client";

import { useState } from "react";

export default function Departments() {
  const [activeDept, setActiveDept] = useState("anatomy");

  const departments = {
    // PRE-CLINICAL
    anatomy: {
      title: "Department of Anatomy",
      description:
        "The Anatomy department deals with the structural organization of the human body through dissection and modern imaging techniques.",
    },
    physiology: {
      title: "Department of Physiology",
      description:
        "Physiology focuses on the normal functioning of organs and systems of the human body.",
    },
    biochemistry: {
      title: "Department of Biochemistry",
      description:
        "Biochemistry studies chemical processes and substances that occur within living organisms.",
    },

    // PARA-CLINICAL
    pathology: {
      title: "Department of Pathology",
      description:
        "Pathology studies the causes, mechanisms, and effects of diseases.",
    },
    pharmacology: {
      title: "Department of Pharmacology",
      description:
        "Pharmacology focuses on drugs, their actions, therapeutic uses, and side effects.",
    },
    microbiology: {
      title: "Department of Microbiology",
      description:
        "Microbiology studies microorganisms and their role in human health and disease.",
    },
    forensic: {
      title: "Department of Forensic Medicine",
      description:
        "Forensic Medicine applies medical knowledge to legal investigations.",
    },
    community: {
      title: "Department of Community Medicine",
      description:
        "Community Medicine focuses on public health, prevention, and healthcare delivery.",
    },

    // CLINICAL
    medicine: {
      title: "Department of General Medicine",
      description:
        "General Medicine deals with diagnosis and non-surgical treatment of diseases.",
    },
    surgery: {
      title: "Department of General Surgery",
      description:
        "General Surgery focuses on operative procedures for various conditions.",
    },
    pediatrics: {
      title: "Department of Paediatrics",
      description:
        "Paediatrics provides medical care for infants, children, and adolescents.",
    },
    obg: {
      title: "Department of Obstetrics & Gynaecology",
      description:
        "This department focuses on women’s reproductive health and childbirth.",
    },
    ortho: {
      title: "Department of Orthopaedics",
      description:
        "Orthopaedics deals with disorders of bones, joints, and muscles.",
    },
    ophthal: {
      title: "Department of Ophthalmology",
      description:
        "Ophthalmology specializes in eye care and vision treatment.",
    },
    ent: {
      title: "Department of ENT",
      description:
        "ENT focuses on disorders of the ear, nose, and throat.",
    },
    derm: {
      title: "Department of Dermatology",
      description:
        "Dermatology deals with diseases of the skin, hair, and nails.",
    },
    psych: {
      title: "Department of Psychiatry",
      description:
        "Psychiatry focuses on mental health and behavioral disorders.",
    },
    radio: {
      title: "Department of Radiology",
      description:
        "Radiology uses imaging techniques for diagnosis and treatment.",
    },
    anesthesia: {
      title: "Department of Anaesthesiology",
      description:
        "Anaesthesiology manages anesthesia, pain relief, and critical care.",
    },
  };

  const activeData = departments[activeDept];

  return (
    <div className="flex w-full min-h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <div className="w-1/4 bg-white shadow-md p-4 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Departments</h3>

        {/* PRE-CLINICAL */}
        <p className="font-bold mt-3 mb-1">Pre-Clinical</p>
        <button onClick={() => setActiveDept("anatomy")} className="dept-btn">Anatomy</button>
        <button onClick={() => setActiveDept("physiology")} className="dept-btn">Physiology</button>
        <button onClick={() => setActiveDept("biochemistry")} className="dept-btn">Biochemistry</button>

        {/* PARA-CLINICAL */}
        <p className="font-bold mt-4 mb-1">Para-Clinical</p>
        <button onClick={() => setActiveDept("pathology")} className="dept-btn">Pathology</button>
        <button onClick={() => setActiveDept("pharmacology")} className="dept-btn">Pharmacology</button>
        <button onClick={() => setActiveDept("microbiology")} className="dept-btn">Microbiology</button>
        <button onClick={() => setActiveDept("forensic")} className="dept-btn">Forensic Medicine</button>
        <button onClick={() => setActiveDept("community")} className="dept-btn">Community Medicine</button>

        {/* CLINICAL */}
        <p className="font-bold mt-4 mb-1">Clinical</p>
        <button onClick={() => setActiveDept("medicine")} className="dept-btn">General Medicine</button>
        <button onClick={() => setActiveDept("surgery")} className="dept-btn">General Surgery</button>
        <button onClick={() => setActiveDept("pediatrics")} className="dept-btn">Paediatrics</button>
        <button onClick={() => setActiveDept("obg")} className="dept-btn">Obstetrics & Gynaecology</button>
        <button onClick={() => setActiveDept("ortho")} className="dept-btn">Orthopaedics</button>
        <button onClick={() => setActiveDept("ophthal")} className="dept-btn">Ophthalmology</button>
        <button onClick={() => setActiveDept("ent")} className="dept-btn">ENT</button>
        <button onClick={() => setActiveDept("derm")} className="dept-btn">Dermatology</button>
        <button onClick={() => setActiveDept("psych")} className="dept-btn">Psychiatry</button>
        <button onClick={() => setActiveDept("radio")} className="dept-btn">Radiology</button>
        <button onClick={() => setActiveDept("anesthesia")} className="dept-btn">Anaesthesiology</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-3/4 p-8 bg-white shadow-inner">
        <h2 className="text-2xl font-bold mb-4">{activeData.title}</h2>
        <p className="text-gray-700">{activeData.description}</p>
      </div>

      {/* BUTTON STYLE */}
      <style jsx>{`
        .dept-btn {
          width: 100%;
          padding: 10px;
          margin-bottom: 6px;
          text-align: left;
          border-radius: 6px;
          background: #f3f4f6;
        }
        .dept-btn:hover {
          background: #2563eb;
          color: white;
        }
      `}</style>
    </div>
  );
}
