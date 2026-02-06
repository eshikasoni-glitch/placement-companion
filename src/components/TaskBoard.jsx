import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Solve 2 Array Problems",
    topic: "Arrays",
    time: "45 mins",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Revise Sliding Window Pattern",
    topic: "Strings",
    time: "30 mins",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Read OS Scheduling Notes",
    topic: "Operating Systems",
    time: "25 mins",
    priority: "medium",
    completed: false,
  },
];

const priorityColor = {
  high: "bg-red-500",
  medium: "bg-yellow-400",
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const remainingTasks = tasks.filter((t) => !t.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl border border-slate-200 bg-white p-8"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-medium text-neutral-900">
          Tasks for Today
        </h2>
        <span className="text-sm text-neutral-600">
          {remainingTasks} task{remainingTasks !== 1 && "s"} remaining
        </span>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition
              ${
                task.completed
                  ? "border-slate-200 bg-slate-50 opacity-70"
                  : "border-slate-200 bg-white"
              }`}
          >
            {/* Priority dot */}
            <span
              className={`h-2.5 w-2.5 rounded-full ${priorityColor[task.priority]}`}
            />

            {/* Checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-4 w-4 accent-neutral-900"
            />

            {/* Task info */}
            <div className="flex flex-1 flex-col">
              <p
                className={`text-sm font-medium transition
                  ${
                    task.completed
                      ? "line-through text-neutral-500"
                      : "text-neutral-900"
                  }`}
              >
                {task.title}
              </p>

              <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-2 py-0.5">
                  {task.topic}
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5">
                  {task.time}
                </span>
              </div>
            </div>

            {/* Action menu */}
            <button className="rounded-lg p-1 text-neutral-500 hover:bg-neutral-100">
              <MoreVertical size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TaskBoard;