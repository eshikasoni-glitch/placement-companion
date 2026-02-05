import { useState, useEffect } from "react";

import SkillChecklist from "./components/SkillChecklist";
import TaskBoard from "./components/TaskBoard";
import Timeline from "./components/Timeline";
import ProgressSummary from "./components/ProgressSummary";
import FocusCard from "./components/FocusCard";
import { MessageThreadPanel } from "./components/tambo/message-thread-panel";

export default function App() {
  /* 🌙 / ☀️ THEME STATE */
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  /* APPLY THEME TO ENTIRE WEBSITE */
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  /* VIEWS ORDER (for keyboard navigation) */
  const views = ["focus", "skills", "tasks", "timeline", "progress"];
  const [activeView, setActiveView] = useState("focus");

  /* ⌨️ LEFT / RIGHT ARROW KEY NAVIGATION */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;

      const currentIndex = views.indexOf(activeView);
      if (currentIndex === -1) return;

      const nextIndex =
        e.key === "ArrowRight"
          ? (currentIndex + 1) % views.length
          : (currentIndex - 1 + views.length) % views.length;

      setActiveView(views[nextIndex]);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeView]);

  return (
    <div className="w-full flex min-h-screen">
      {/* LEFT: CHAT PANEL */}
      <MessageThreadPanel />

      {/* RIGHT: MAIN WORKSPACE */}
      <div
        className="
          flex-1 p-6
          bg-neutral-50 dark:bg-neutral-900
          text-neutral-900 dark:text-neutral-100
          transition-colors duration-300
        "
      >
        {/* 🌙 / ☀️ EMOJI TOGGLE */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="
              text-xl p-2 rounded-full
              hover:bg-neutral-200 dark:hover:bg-neutral-700
              transition-all
            "
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* NAVIGATION TABS */}
        <div
          className="
            mb-8 flex gap-2 p-2 rounded-xl w-fit
            bg-neutral-100 dark:bg-neutral-800
          "
        >
          {views.map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${
                  activeView === view
                    ? "bg-white text-black shadow dark:bg-neutral-100"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {activeView === "focus" && <FocusCard />}
        {activeView === "skills" && <SkillChecklist />}
        {activeView === "tasks" && <TaskBoard />}
        {activeView === "timeline" && <Timeline />}
        {activeView === "progress" && <ProgressSummary />}
      </div>
    </div>
  );
}
