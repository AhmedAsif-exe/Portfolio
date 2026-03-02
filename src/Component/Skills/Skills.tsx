import { forwardRef } from "react";
import { Globe, Database, BarChart3, Lightbulb, Code } from "lucide-react";

type SkillGroup = {
  title: string;
  score: number;
  icon: React.ElementType;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    score: 90,
    icon: Globe,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    score: 85,
    icon: Database,
    items: [
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "RESTful APIs",
      "Database Design",
    ],
  },
  {
    title: "Data Analytics",
    score: 88,
    icon: BarChart3,
    items: ["Data Analytics", "Data Visualization", "Data Mining"],
  },
  {
    title: "AI/ML",
    score: 75,
    icon: Lightbulb,
    items: [
      "YOLOv8",
      "Computer Vision",
      "Python",
      "Google Colab",
      "TensorFlow",
    ],
  },
  {
    title: "DevOps & Tools",
    score: 80,
    icon: Code,
    items: ["Git", "GitHub", "Vercel", "Netlify", "VS Code", "CI/CD"],
  },
];

const Skills = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#332d2d]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#C8A796] to-[#F4F3F8] bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills, continuously evolving
          with industry trends and project demands.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-[#C8A796] flex items-center gap-2">
                    <Icon size={20} />
                    {group.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {group.score}%
                    </div>
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <div
                        style={{ width: `${group.score}%` }}
                        className="bg-gradient-to-r from-[#C8A796] to-[#F4F3F8] h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="bg-gray-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-[#C8A796]/20 hover:text-[#F4F3F8] transition-colors duration-200 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Skills;
