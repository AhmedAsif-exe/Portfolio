import { FC, memo, useState } from "react";

// Icon components
const CalendarIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#06b6d4]"
    aria-hidden="true"
  >
    <path d="M8 2v4"></path>
    <path d="M16 2v4"></path>
    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>
));

const MapPinIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#a78bfa]/90"
    aria-hidden="true"
  >
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
));

const CheckIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#06b6d4]"
    aria-hidden="true"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
    <path d="m9 11 3 3L22 4"></path>
  </svg>
));

const ArrowRightIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#06b6d4] mt-1 flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
));

// data types
interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  quote: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    date: "June 2024 – Jan 2025",
    title: "FullStack & Desktop Application Developer",
    company: "PyBugs Technologies & BPO",
    location: "Saddar, Rawalpindi",
    quote:
      "Crafting scalable digital solutions while turning complex business challenges into clean, efficient systems.",
    description:
      "Contributed to developing and maintaining scalable web applications, focusing on backend systems, database management, and performance optimization Played a key role in building business solutions, supporting system architecture, and improving team code quality.",
    achievements: [
      "Developed and maintained multiple management systems to streamline business operations.",
      "Improved backend performance and database efficiency through system optimization.",
      "Contributed to scalable architecture design and mentored junior developers to enhance code quality.",
    ],
    tech: [
      ".Net Framework",
      "MySQL",
      "WordPress",
      "ReactJS",
      "Express",
      "NodeJS",
    ],
  },
  {
    date: "Dec 2024 – Feb 2025",
    title: "Project Intern",
    company: "Codesloop",
    location: "Remote",
    quote:
      "Even as an intern, I learned that taking initiative and collaborating deeply can drive real impact in project development.",
    description:
      "Contributed to full-stack projects, optimizing solutions with React, Node.js, and MongoDB, while supporting team workflows and knowledge sharing.",
    achievements: [
      "Engineered and optimized full-stack solutions to improve performance and scalability",
      "Collaborated cross-functionally and assumed additional responsibilities to drive project success",
      "Built a record and revenue tracking system for Iqra Driving School, streamlining operations and financial management",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "ReduxJS",
      "Full-Stack Development",
      "Team Collaboration",
    ],
  },
  {
    date: "May 2025 – Present",
    title: "Technical Lead",
    company: "Aba Virtual",
    location: "Remote",
    quote:
      "Leading development for a platform that empowers children with special needs taught me how technology can make learning truly accessible.",
    description:
      "Oversaw the development and optimization of educational tools, implementing features that enhance learning experiences for children with special needs.",
    achievements: [
      "Led full-stack development of the learning platform from concept to deployment",
      "Implemented interactive educational features tailored for special needs students",
      "Optimized system performance to ensure smooth and accessible learning experiences",
    ],
    tech: [
      "Full-Stack Development",
      "React",
      "Node.js",
      "PhaserJS",
      "Educational Technology",
    ],
  },
  {
    date: "May 2025 – Present",
    title: "Lead Web Developer",
    company: "Anime Anyway",
    location: "Remote",
    quote:
      "Scaling a fan-driven platform to tens of thousands of active users taught me how to engineer performance under real-world traffic pressure.",

    description:
      "Organization providing English fan translations from Japanese, serving a large and active online audience.",
    achievements: [
      "Sustained Supabase and Hostinger infrastructure under heavy traffic (100K+ active users, 1.5M+ total views) while maintaining strong performance on a low-tier setup",
      "Led development and optimization of the platform to ensure reliable content delivery and smooth user experience",
    ],
    tech: [
      "React",
      "Supabase",
      "Hostinger",
      "Web Performance Optimization",
      "Tailwind",
    ],
  },
];

const Journey: FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#a78bfa] bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h2>
        <div className="space-y-12">
          {visibleExperiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="bg-[#000000]/40 backdrop-blur-sm rounded-xl p-8 hover:bg-[#0f172a]/70 transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* left column */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarIcon />
                      <span className="text-[#06b6d4] text-sm font-medium">
                        {exp.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#06b6d4] text-left mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-[#a78bfa]/80 text-left mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPinIcon />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  {/* right column */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-[#a78bfa] leading-relaxed italic">
                      &quot;{exp.quote}&quot;
                    </p>
                    <p className="text-gray-300 leading-relaxed text-left">
                      {exp.description}
                    </p>
                    <div>
                      <h5 className="text-sm font-semibold text-[#06b6d4] mb-3 flex items-center gap-2">
                        <CheckIcon />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ArrowRightIcon />
                            <span className="text-[#a78bfa] text-sm text-left">
                              {a}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span
                          key={i}
                          className="bg-[#06b6d4]/20 text-[#06b6d4] px-3 py-1 rounded-full text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {idx < visibleExperiences.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-12 bg-gradient-to-b from-[#06b6d4] to-[#a78bfa]"></div>
                </div>
              )}
            </div>
          ))}
          {experiences.length > 2 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex flex-col items-center text-[#06b6d4] hover:scale-110 transition-all duration-300"
              >
                <div
                  className={`transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="48px"
                    height="48px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
                      fill="#b3b3b3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Journey);
