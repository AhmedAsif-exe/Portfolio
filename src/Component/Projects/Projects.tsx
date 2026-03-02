import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Smartphone,
  Globe,
  Eye,
  Clock,
  Users,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  duration: string;
  role: string;
  tech: string[];
  github: string;
  live?: string;
  icon: LucideIcon;
};
const projects: Project[] = [
  {
    title: "VoiceBot: Offline Voice-Controlled Home Automation",
    category: "IoT • Voice AI • Automation",
    description:
      "Offline voice-controlled home automation system with privacy-first design and optional remote access. Works without cloud dependencies while supporting multi-user access.",
    duration: "6 Months",
    role: "Group Project",
    tech: ["Python", "Voice Processing", "NLP", "Home Automation"],
    github: "https://github.com/AhmedAsif-exe/VocalBot",
    live: "#",
    icon: Smartphone,
  },
  {
    title: "AbaVirtual: Learning Platform for Special Needs Children",
    category: "EdTech • Full-Stack Development",
    description:
      "Learning platform with gamified interactive games, secure authentication, and payment integration. Designed to engage children with special needs.",
    duration: "2 Months",
    role: "Lead Developer",
    tech: ["Phaser JS", "Sanity CMS", "Google Auth", "PayPal API"],
    github: "https://github.com/AhmedAsif-exe/autism-therapist-website",
    live: "https://abavirtual.net/",
    icon: Globe,
  },
  {
    title: "Fan Translation Platform: Scaling Content Delivery",
    category: "Full-Stack • Performance Engineering",
    description:
      "Fan translation platform serving 100K+ active users with custom line-by-line comments and Discord API integration for moderation. Monetized with Google AdSense.",
    duration: "2 Months",
    role: "Lead Developer",
    tech: [
      "Supabase",
      "Hostinger",
      "Discord API",
      "Google AdSense",
      "Custom Comments System",
    ],
    github: "https://github.com/AhmedAsif-exe/anime-anyway",
    live: "https://animeanyway.com/",
    icon: Globe,
  },
  {
    title: "Iqra Driving School: Management Platform",
    category: "Full-Stack • Business Management",
    description:
      "Comprehensive driving school management system with dual interfaces for Admins and Managers. Features student registration, instructor/vehicle/branch management, payment tracking, attendance marking, and drag-and-drop class scheduling.",
    duration: "Ongoing",
    role: "Full-Stack Developer",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "Redux"],
    github: "https://github.com/codesloop123/IQRA_Driving_School",
    live: "#",
    icon: Globe,
  },
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#332d2d]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#C8A796] to-[#F4F3F8] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A showcase of my best work - from AI-powered mobile apps to enterprise
          web systems. Each project represents a unique challenge and innovative
          solution.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-gray-500/20 to-[#3b2020]/20 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C8A796] to-[#F4F3F8] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="text-[#332d2d]" />
                    </div>
                    <p className="text-gray-400 text-sm">Project Screenshots</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#C8A796] to-[#F4F3F8] bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{project.category}</p>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                  <span>{project.duration}</span>
                  <span>{project.role}</span>
                </div>

                {/* Tech + Links */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="bg-[#C8A796]/20 text-[#C8A796] px-2 py-1 rounded text-xs"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#C8A796] transition-colors"
                    >
                      <Github size={18} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        className="text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex flex-col items-center text-[#C8A796] hover:scale-110 transition-all duration-300"
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
      </div>
    </section>
  );
};

export default Projects;
