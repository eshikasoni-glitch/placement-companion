import { MessageThreadPanel } from "./components/tambo/message-thread-panel";
import SkillChecklist from "./components/tambo/SkillChecklist";

export default function App() {
  return (
    <div className="w-full flex">
      <MessageThreadPanel />
      <SkillChecklist />
    </div>
  );
}