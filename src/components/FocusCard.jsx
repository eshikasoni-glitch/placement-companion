import React from "react";
import { Play, Activity } from "lucide-react";
import { motion } from "framer-motion";

/**
 * This data will later come from AI / Tambo
 */
const focusData = {
  topic: "Array Manipulation – Sliding Window",
  interviewFrequency: "Asked in 80% of MAANG interviews",
  difficulty: "Moderate",
  progress: 45,
  tip: "Placement Hack: Master sliding window patterns — they repeat everywhere.",
};

const FocusCard = () => {
  const {
    topic,
    interviewFrequency,
    difficulty,
    progress,
    tip,
  } = focusData;

  return (
    <div className="relative w-full max-w-2xl">
      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-2xl bg-purple-200/40 blur-xl" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl border border-neutral-200 bg-white p-8"
      >
        {/* Header */}
        <div className="mb-6 flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center gap-1 text-sm font-medium text-purple-600"
          >
            <Activity size={14} />
            Live
          </motion.span>

          <span className="text-sm text-neutral-500">
            Current Focus
          </span>
        </div>

        {/* Primary Topic */}
        <h2 className="mb-4 text-3xl font-semibold text-neutral-900">
          {topic}
        </h2>

        {/* Metadata chips */}
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700">
            {interviewFrequency}
          </span>

          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700">
            Difficulty: {difficulty}
          </span>
        </div>

        {/* Mini progress bar */}
        <div className="mb-6">
          <div className="mb-1 flex justify-between text-sm text-neutral-600">
            <span>Topic Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="h-1.5 w-full rounded-full bg-neutral-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6 }}
              className="h-1.5 rounded-full bg-neutral-900"
            />
          </div>
        </div>

        {/* Primary action */}
        <button className="mb-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition">
          <Play size={16} />
          Continue Learning
        </button>

        {/* Tip */}
        <p className="text-sm text-neutral-600 italic">
          {tip}
        </p>
      </motion.div>
    </div>
  );
};

export default FocusCard;