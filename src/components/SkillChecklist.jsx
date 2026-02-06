import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, FileText, Layers, Check } from "lucide-react";

const skillsData = [
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    difficulty: "Intermediate",
    icon: Code,
  },
  {
    id: "system-design",
    name: "System Design",
    difficulty: "Advanced",
    icon: Layers,
  },
  {
    id: "resume",
    name: "Resume & ATS",
    difficulty: "Beginner",
    icon: FileText,
  },
];

const SkillChecklist = ({onGenerate}) => {
  const [selected, setSelected] = useState([]);

  const toggleSkill = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };
  const [showRoadmap, setShowRoadmap] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl border border-neutral-200 bg-white p-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Select Your Focus Areas
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Choose what you want to focus on. We’ll customize your roadmap
          accordingly.
        </p>
      </div>

      {/* Skill grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {skillsData.map((skill, index) => {
          const isActive = selected.includes(skill.id);
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => toggleSkill(skill.id)}
              className={`relative cursor-pointer rounded-xl border p-5 transition-all
                ${
                  isActive
                    ? "border-neutral-900"
                    : "border-neutral-200 hover:border-neutral-400"
                }`}
            >
              {/* Checkmark */}
              {isActive && (
                <div className="absolute right-3 top-3 rounded-full bg-neutral-900 p-1">
                  <Check size={14} className="text-white" />
                </div>
              )}

              {/* Icon */}
              <div className="mb-4 text-neutral-700">
                <Icon size={24} />
              </div>

              {/* Skill name */}
              <h3 className="mb-2 text-base font-medium text-neutral-900">
                {skill.name}
              </h3>

              {/* Difficulty badge */}
              <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                {skill.difficulty}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-600">
          You’ve selected{" "}
          <span className="font-medium text-neutral-900">
            {selected.length}
          </span>{" "}
          topic{selected.length === 1 ? "" : "s"} to master
        </p>

        <button
          onClick={onGenerate}
          disabled={selected.length === 0}
          className={`rounded-xl px-5 py-2.5 text-sm font-medium transition
            ${
              selected.length === 0
                ? "cursor-not-allowed bg-neutral-200 text-neutral-500"
                : "bg-neutral-900 text-white hover:bg-neutral-800"
            }`}
        >
          Generate My Roadmap
        </button>
      </div>
    </motion.div>
  );
};

export default SkillChecklist;