import { MessageThreadPanel } from "./components/tambo/message-thread-panel";
import ProgressSummary from "./components/ProgressSummary";
import FocusCard from "./components/FocusCard";
import SkillChecklist from "./components/SkillChecklist";
import TaskBoard from "./components/TaskBoard";
import RoadmapTracker from "./components/RoadmapTracker";
import { useState } from "react";

export default function App() {
  const [stage, setStage] = useState("skills");

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left: Chat (Tambo handles message rendering) */}
      <MessageThreadPanel />

      {/* Right: Workspace */}
      {/* <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {stage === "skills" && (
          <SkillChecklist onGenerate={() => setStage("roadmap")} />
        )}

        {stage === "roadmap" && (
          <RoadmapTracker onStartExecution={() => setStage("execute")} />
        )}

        {stage === "execute" && (
          <>
            <FocusCard />
            <TaskBoard />
            <ProgressSummary />
          </>
        )}
      </div> */}
    </div>
  );
}