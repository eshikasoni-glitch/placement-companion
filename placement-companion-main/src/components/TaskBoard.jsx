import { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { title: "Solve Arrays", checked: false },
    { title: "Revise Strings", checked: false },
    { title: "Do 2 problems", checked: false },
  ]);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  return (
    <div
      className="
        rounded-3xl p-8
        bg-white dark:bg-white
        border border-neutral-200
        shadow-xl
      "
    >
      <h2 className="text-xl font-semibold mb-6 text-neutral-900">
        Task Board
      </h2>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <label
            key={index}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(index)}
              className="w-5 h-5 accent-black"
            />

            <span
              className={`text-lg transition-all ${
                task.checked
                  ? "line-through text-neutral-400"
                  : "text-neutral-900"
              }`}
            >
              {task.title}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
