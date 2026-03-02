import { FC, memo } from "react";
// removed CSS module import; using Tailwind utilities instead

// SVG Icon Components
const TargetIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-400 flex-shrink-0 mt-1"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
));

const ZapIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-200 flex-shrink-0 mt-1"
    aria-hidden="true"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
  </svg>
));

const HeartIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-400 flex-shrink-0 mt-1"
    aria-hidden="true"
  >
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
  </svg>
));

const TrendingIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-200 flex-shrink-0 mt-1"
    aria-hidden="true"
  >
    <path d="M16 7h6v6"></path>
    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
  </svg>
));

const BookIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#C8A796] flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M12 7v14"></path>
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
  </svg>
));

// Story Card Component
const StoryCard = memo<{
  title: string;
  color: "beginning" | "growth";
  children: React.ReactNode;
}>(({ title, color, children }) => {
  const borderClass =
    color === "beginning"
      ? "border-l-4 border-yellow-400"
      : "border-l-4 border-[#1D1F25]";
  const titleColor =
    color === "beginning" ? "text-[#C8A796]" : "text-[#F4F3F8]";
  return (
    <div
      className={`bg-[#0F1014]/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 ${borderClass}`}
    >
      <h3 className={`text-2xl font-semibold mb-4 ${titleColor}`}>{title}</h3>
      {children}
    </div>
  );
});

// Drive Item Component
const DriveItem = memo<{ icon: React.ComponentType; text: string }>(
  ({ icon: Icon, text }) => (
    <div className="flex items-start gap-3">
      <Icon />
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  ),
);

// Skill Progress Component
const SkillProgress = memo<{
  name: string;
  percentage: number;
  description: string;
}>(({ name, percentage, description }) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm text-gray-300 font-medium">{name}</span>
      <span className="text-xs text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full bg-[#1D1F25] rounded-full h-2">
      <div
        className="h-full bg-gradient-to-r from-[#C8A796] to-[#F4F3F8] rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <p className="text-xs text-gray-400">{description}</p>
  </div>
));

const MyStory: FC = () => {
  const drivingForces = [
    {
      icon: TargetIcon,
      text: "Building solutions that solve real problems for real people",
    },
    {
      icon: ZapIcon,
      text: "Pushing the boundaries of what's possible with modern tech",
    },
    {
      icon: HeartIcon,
      text: "Creating technology that brings people together",
    },
    {
      icon: TrendingIcon,
      text: "Continuous learning and sharing knowledge with the community",
    },
  ];
  const skills = [
    {
      name: "Full-Stack Development (MERN)",
      percentage: 85,
      description:
        "Building scalable web applications using MongoDB, Express, React, and Node.js",
    },
    {
      name: "AI / Machine Learning",
      percentage: 75,
      description:
        "Model building, training, and evaluation using Python, scikit-learn, and TensorFlow",
    },
    {
      name: "Data Science",
      percentage: 80,
      description:
        "Data analysis, visualization, and statistical modeling with Pandas, NumPy, and Matplotlib",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#292726]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#C8A796] to-[#F4F3F8] bg-clip-text text-transparent">
            My Story
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story Cards */}
          <div className="flex flex-col gap-6">
            <StoryCard title="The Beginning" color="beginning">
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                My journey started at Fast University Islamabad, where I
                discovered my passion for solving real-world problems through
                code. What began as curiosity about coding evolved into a deep
                love for full-stack development and AI.
              </p>
              <p className="text-[#C8A796] font-semibold text-sm leading-relaxed">
                "Every bug I fixed, every feature I built, taught me that great
                software isn't just about code—it's about understanding people's
                problems and crafting elegant solutions."
              </p>
            </StoryCard>

            <StoryCard title="The Growth" color="growth">
              <p className="text-gray-300 leading-relaxed text-sm">
                From my first internship to leading full-stack projects, each
                experience shaped my philosophy:
                <span className="text-gray-300 font-semibold">
                  {" "}
                  technology should be invisible, impactful, and delightful
                </span>
                . Today, I build systems that don't just work—they transform how
                people work.
              </p>
            </StoryCard>
          </div>

          {/* Right Column - Drives & Skills */}
          <div className="flex flex-col gap-6">
            {/* What Drives Me */}
            <div className="bg-gradient-to-br from-[#141518]/20 to-[#0F1014]/20 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-gray-300">
                What Drives Me
              </h3>
              <div className="flex flex-col gap-4">
                {drivingForces.map((force, index) => (
                  <DriveItem key={index} icon={force.icon} text={force.text} />
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="bg-[#0F1014]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h4 className="flex items-center gap-2 font-semibold mb-4 text-gray-300">
                <BookIcon />
                Currently Learning
              </h4>
              <div className="flex flex-col gap-4">
                {skills.map((skill) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    description={skill.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
