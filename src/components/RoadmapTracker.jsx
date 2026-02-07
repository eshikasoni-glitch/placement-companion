import React from "react";
import { motion } from "framer-motion";
import { Check, Lock, Play } from "lucide-react";

/**
 * Fallback roadmap (used when AI doesn't send data yet)
 */
const fallbackRoadmap = [
  {
    day: "Day 1–5",
    topic: "Arrays",
    weightage: "High Frequency",
    progress: "0 / 12 problems solved",
    status: "active",
  },
  {
    day: "Day 6–10",
    topic: "Strings",
    weightage: "Medium Frequency",
    progress: "0 / 10 problems solved",
    status: "locked",
  },
  {
    day: "Day 11–15",
    topic: "Linked List",
    weightage: "Medium Frequency",
    progress: "0 / 8 problems solved",
    status: "locked",
  },
];

const statusIcon = {
  completed: <Check size={14} />,
  active: <Play size={14} />,
  locked: <Lock size={14} />,
};

const RoadmapTracker = ({ roadmap, onStartExecution }) => {
  // 🛡️ SAFETY: Always render valid array
  const safeRoadmap =
    Array.isArray(roadmap) && roadmap.length > 0
      ? roadmap
      : fallbackRoadmap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl border border-neutral-200 bg-white p-8"
    >
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Placement Roadmap
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Track your progress step-by-step through your preparation journey.
        </p>
      </div>

      {/* Roadmap */}
      <div className="relative space-y-10">
        {safeRoadmap.map((item, index) => {
          const status = item?.status || "locked";
          const isCompleted = status === "completed";
          const isActive = status === "active";

          return (
            <div key={index} className="relative flex gap-6">
              {/* Vertical Path */}
              <div className="relative flex flex-col items-center">
                {index !== safeRoadmap.length - 1 && (
                  <div
                    className={`absolute top-6 h-full w-px
                      ${
                        isCompleted
                          ? "bg-indigo-600"
                          : "border-l border-dashed border-neutral-300"
                      }`}
                  />
                )}

                {/* Node */}
                <motion.div
                  whileHover={isActive ? { scale: 1.1 } : {}}
                  className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border
                    ${
                      isCompleted
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : isActive
                        ? "border-indigo-600 text-indigo-600"
                        : "border-neutral-300 text-neutral-400"
                    }`}
                >
                  {statusIcon[status]}
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={isActive ? { y: -2 } : {}}
                onClick={isActive ? onStartExecution : undefined}
                className={`flex-1 rounded-xl border p-5 transition
                  ${
                    isActive
                      ? "cursor-pointer border-indigo-600 shadow-sm"
                      : "border-neutral-200"
                  }`}
              >
                {/* Day */}
                {item?.day && (
                  <p className="text-xs text-neutral-500">{item.day}</p>
                )}

                {/* Title + Weightage */}
                <div className="mt-1 flex items-center gap-2">
                  <h3 className="text-lg font-medium text-neutral-900">
                    {item?.topic || "Untitled Topic"}
                  </h3>

                  {item?.weightage && (
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
                      {item.weightage}
                    </span>
                  )}
                </div>

                {/* Progress */}
                {item?.progress && (
                  <p className="mt-2 text-sm text-neutral-600">
                    {item.progress}
                  </p>
                )}

                {/* CTA */}
                {isActive && (
                  <p className="mt-3 text-xs font-medium text-indigo-600">
                    Click to start today’s plan →
                  </p>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RoadmapTracker;