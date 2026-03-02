import { memo } from "react";
import profileImg from "../../Utils/Images/Me.jpg";

// SVG Icons Components
const EyeIcon = memo(() => (
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
    aria-hidden="true"
  >
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
));

const DownloadIcon = memo(() => (
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
    aria-hidden="true"
  >
    <path d="M12 15V3" />
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
  </svg>
));

const CoffeeIcon = memo(() => (
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
    aria-hidden="true"
  >
    <path d="M10 2v2" />
    <path d="M14 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
    <path d="M6 2v2" />
  </svg>
));

const LightbulbIcon = memo(() => (
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
    aria-hidden="true"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
));

const HeartIcon = memo(() => (
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
    aria-hidden="true"
  >
    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
  </svg>
));

const GitHubIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
));

const LinkedInIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
));

const MailIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
    <rect x="2" y="4" width="20" height="16" rx="2" />
  </svg>
));

const ChevronDownIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
));

// Badge Component
interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  colorClass: string;
}

const Badge = memo(({ icon, text, colorClass }: BadgeProps) => (
  <div className={`flex items-center gap-1 text-sm ${colorClass}`}>
    <span className="w-4 h-4">{icon}</span>
    <span className="hidden sm:inline">{text}</span>
  </div>
));

// Social Link Component
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
  rel?: string;
}

const SocialLink = memo(
  ({ href, icon, label, target, rel }: SocialLinkProps) => (
    <a
      href={href}
      target={target}
      rel={rel}
      className="no-underline text-[#a78bfa] transition-colors duration-200 flex items-center gap-2 hover:text-[#06b6d4]"
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  ),
);

// Profile Image Component
const ProfileImage = memo(() => (
  <div className="animate-fadeInUp mt-16 sm:mt-0">
    <div className="w-80 h-80 mx-auto lg:mx-0 lg:mb-0 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#a78bfa] p-1 lg:order-2">
      <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-48 h-48 bg-gradient-to-br from-[#06b6d4] to-[#a78bfa] rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#0f172a] overflow-hidden">
              <img
                src={profileImg}
                alt="Profile Photo"
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <p className="text-sm text-gray-200">Profile Picture</p>
        </div>
      </div>
    </div>
  </div>
));

// Main Component
const TitleContent = () => {
  const badges = [
    {
      icon: <CoffeeIcon />,
      text: "Chai-fueled coder",
      colorClass: "text-gray-200",
    },
    {
      icon: <LightbulbIcon />,
      text: "Problem solver at heart",
      colorClass: "text-gray-200",
    },
    {
      icon: <HeartIcon />,
      text: "Passionate about AI/ML",
      colorClass: "text-gray-200",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/AhmedAsif-exe",
      icon: <GitHubIcon />,
      label: "GitHub",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "https://www.linkedin.com/in/ahmed-asif-b62313334/",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "mailto:ahmedaanasif@gmail.com",
      icon: <MailIcon />,
      label: "Email",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-8 relative bg-[#0f172a]"
      id="home"
    >
      <div
        className="absolute inset-0 animate-pulse-gradient"
        style={{
          background:
            "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(15, 23, 42, 0.3), rgba(167, 139, 250, 0.1), rgba(6, 182, 212, 0.15), rgba(167, 139, 250, 0.1))",
        }}
      />
      <div className="max-w-6xl mx-auto grid gap-12 items-center relative z-10 lg:grid-cols-[1fr_2fr]">
        <ProfileImage />

        <div className="text-center lg:text-left text-gray-200">
          {/* Badges Section */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-0 flex-wrap">
            {badges.map((badge, idx) => (
              <Badge
                key={idx}
                icon={badge.icon}
                text={badge.text}
                colorClass={badge.colorClass}
              />
            ))}
          </div>

          {/* Name Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-8 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#a78bfa] via-[#06b6d4] to-[#a78bfa] bg-clip-text text-transparent">
              M. Ahmed Asif
            </span>
          </h1>

          {/* Subtitle and Description */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 font-semibold bg-gradient-to-r from-[#06b6d4] via-[#a78bfa] to-[#06b6d4] bg-clip-text text-transparent">
              Full-Stack & AI Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              <span className="text-[#06b6d4] font-semibold">
                "I turn complex problems into elegant digital solutions."
              </span>
              <br />
              From AI-powered apps to enterprise web systems, I build technology
              that makes a real difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="/Ahmed_Asif_Resume.pdf"
              download="Ahmed_Asif_Resume.pdf"
              className="border-2 border-[#06b6d4] text-[#06b6d4] px-8 py-4 rounded-full font-medium cursor-pointer transition-all duration-300 flex items-center gap-2 bg-transparent no-underline text-base hover:border-[#a78bfa] hover:text-[#a78bfa]"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <nav className="flex items-center justify-center lg:justify-start gap-6">
            {socialLinks.map((link, idx) => (
              <SocialLink
                key={idx}
                href={link.href}
                icon={link.icon}
                label={link.label}
                target={link.target}
                rel={link.rel}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 mt-3 sm:mt-0 -translate-x-1/2 animate-bounce-slow cursor-pointer"
        aria-label="Scroll to About section"
      >
        <div className="w-8 h-8 text-[#06b6d4]">
          <ChevronDownIcon />
        </div>
      </a>
    </section>
  );
};

export default TitleContent;
