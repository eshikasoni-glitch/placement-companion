import SkillChecklist from "../components/SkillChecklist";
import RoadmapTracker from "../components/RoadmapTracker";
import FocusCard from "../components/FocusCard";
import TaskBoard from "../components/TaskBoard";
import ProgressSummary from "../components/ProgressSummary";

export const components = [
  {
    name: "SkillChecklist",
    description:
      "Lets the user select focus areas for placement preparation",
    component: SkillChecklist,
    propsDefinition: {}, // 👈 NO PROPS REQUIRED
  },
  {
    name: "RoadmapTracker",
    description:
      "Displays a day-wise placement preparation roadmap",
    component: RoadmapTracker,
    propsDefinition: {
      roadmap: "Array of roadmap steps with day, topic, and status",
    },
  },
  {
    name: "FocusCard",
    description:
      "Shows the current active topic the student should focus on",
    component: FocusCard,
    propsDefinition: {
      topic: "Current focus topic",
      urgency: "Urgency level like high or medium",
    },
  },
  {
    name: "TaskBoard",
    description:
      "Shows daily tasks for the current preparation topic",
    component: TaskBoard,
    propsDefinition: {
      tasks: "List of tasks for today",
    },
  },
  {
    name: "ProgressSummary",
    description:
      "Shows overall preparation progress and completion stats",
    component: ProgressSummary,
    propsDefinition: {
      percent: "Overall completion percentage",
    },
  },
];