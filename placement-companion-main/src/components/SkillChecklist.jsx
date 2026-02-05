import { useState } from "react";

const SkillChecklist = () => {
  const [skills, setSkills] = useState([
    { name: "DSA", checked: false },
    { name: "Resume", checked: false },
    { name: "Projects", checked: false },
    { name: "Interviews", checked: false },
  ]);

  const toggleSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].checked = !updatedSkills[index].checked;
    setSkills(updatedSkills);
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
        Skill Checklist
      </h2>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <label
            key={index}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={skill.checked}
              onChange={() => toggleSkill(index)}
              className="w-5 h-5 accent-black"
            />

            <span
              className={`text-lg transition-all ${
                skill.checked
                  ? "line-through text-neutral-400"
                  : "text-neutral-900"
              }`}
            >
              {skill.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SkillChecklist;
