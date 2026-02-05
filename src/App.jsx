import { MessageThreadPanel } from "./components/tambo/message-thread-panel";
import Timeline from "./components/Timeline";
import ProgressSummary from "./components/ProgressSummary";
import FocusCard from "./components/FocusCard";
import { useState } from "react";

export default function App() {
  const [activeView, setActiveView] = useState("focus");

  return (
    <div className="w-full flex">
      {/* Left: Chat */}
      <MessageThreadPanel />

      {/* Right: Workspace */}
      <div className="flex-1 p-6">
        {/* TEMP DEV BUTTONS */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={() => setActiveView("focus")}
            className="px-3 py-1 border border-neutral-300 rounded"
          >
            Focus
          </button>
          <button
            onClick={() => setActiveView("timeline")}
            className="px-3 py-1 border border-neutral-300 rounded"
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveView("progress")}
            className="px-3 py-1 border border-neutral-300 rounded"
          >
            Progress
          </button>
        </div>

        {/* CONDITIONAL RENDERING */}
        {activeView === "focus" && <FocusCard />}
        {activeView === "timeline" && <Timeline />}
        {activeView === "progress" && <ProgressSummary />}
      </div>
    </div>
  );
}