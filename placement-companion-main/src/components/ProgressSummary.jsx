import React from "react";
import { CheckCircle, Flame, Timer } from "lucide-react";
import { motion } from "framer-motion";

const progressData = {
  overallPercent: 30,
  tasksCompleted: "12 / 40",
  streak: "5 Days",
  readiness: "Target: 2 weeks",
  motivation: "You're in the top 15% of consistent learners this week!",
  skills: [
    { name: "DSA", percent: 70 },
    { name: "DBMS", percent: 40 },
    { name: "Operating Systems", percent: 20 },
  ],
};

const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ProgressSummary = () => {
  const {
    overallPercent,
    tasksCompleted,
    streak,
    readiness,
    motivation,
    skills,
  } = progressData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-2xl border border-neutral-200 bg-white p-8"
    >
      {/* Heading */}
      <h2 className="mb-6 text-xl font-medium text-neutral-900">
        Progress Summary
      </h2>

      {/* Gauge */}
      <div className="flex items-center justify-center">
        <div className="relative h-40 w-40">
          <svg className="h-full w-full rotate-[-90deg]">
            <circle
              cx="80"
              cy="80"
              r={RADIUS}
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />

            <motion.circle
              cx="80"
              cy="80"
              r={RADIUS}
              stroke="#111827"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{
                strokeDashoffset:
                  CIRCUMFERENCE * (1 - overallPercent / 100),
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              className="text-4xl font-semibold text-neutral-900"
            >
              {overallPercent}%
            </motion.span>
            <span className="text-xs text-neutral-500">
              completed
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <Stat icon={<CheckCircle size={18} />} label="Tasks" value={tasksCompleted} delay={0.4} />
        <Stat icon={<Flame size={18} />} label="Streak" value={streak} delay={0.55} />
        <Stat icon={<Timer size={18} />} label="Readiness" value={readiness} delay={0.7} />
      </div>

      {/* Skill Breakdown */}
      <div className="mt-8 space-y-4">
        {skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="mb-1 flex justify-between text-sm text-neutral-600">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-neutral-200">
              <motion.div
                className="h-2 rounded-full bg-neutral-900"
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: `${skill.percent}%`, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.6 + i * 0.15,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Motivation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.3 }}
        className="mt-6 text-sm text-neutral-600 italic"
      >
        {motivation}
      </motion.p>
    </motion.div>
  );
};

const Stat = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3, ease: "easeOut" }}
    className="flex flex-col items-center gap-1 rounded-xl bg-neutral-50 border border-neutral-200 p-4 text-center"
  >
    <div className="text-neutral-700">{icon}</div>
    <p className="text-xs text-neutral-500">{label}</p>
    <p className="text-sm font-medium text-neutral-900">{value}</p>
  </motion.div>
);

export default ProgressSummary;