import React, { useState } from "react";

const timeline = [
  {
    day: "Day 1 – 5",
    title: "Arrays",
    desc: "Traversal, prefix sum, two pointers, subarrays",
  },
  {
    day: "Day 6 – 10",
    title: "Strings",
    desc: "Sliding window, hashing, pattern matching",
  },
  {
    day: "Day 11 – 15",
    title: "Linked List",
    desc: "Pointers, reversal, cycle detection",
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full px-10 py-16 bg-white">
      {/* Heading */}
      <h2 className="mb-12 text-3xl font-semibold text-neutral-900">
        Timeline
      </h2>

      {/* Timeline list */}
      <div className="space-y-12">
        {timeline.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.title}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="transition-all"
            >
              {/* Day */}
              <p className="text-sm text-neutral-500">{item.day}</p>

              {/* Title */}
              <h3
                className={`mt-1 text-xl font-medium transition-colors duration-300 ${
                  isActive ? "text-neutral-900" : "text-neutral-400"
                }`}
              >
                {item.title}
              </h3>

              {/* Fixed-height description (NO JUMP) */}
              <div className="mt-2 h-[44px] overflow-hidden">
                <p
                  className={`text-sm transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-0 text-neutral-600"
                      : "opacity-0 -translate-y-1"
                  }`}
                >
                  {item.desc}
                </p>
              </div>

              {/* Divider */}
              <div className="mt-6 h-px w-full bg-neutral-200" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;