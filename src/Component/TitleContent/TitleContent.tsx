import { memo } from "react";
import classes from "./TitleContent.module.css";
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
  <div className={`${classes.badge} ${colorClass}`}>
    <span className={classes.badgeIcon}>{icon}</span>
    <span className={classes.badgeText}>{text}</span>
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
    <a href={href} target={target} rel={rel} className={classes.socialLink}>
      <span className={classes.socialIcon}>{icon}</span>
      <span className={classes.socialLinkText}>{label}</span>
    </a>
  ),
);

// Profile Image Component
const ProfileImage = memo(() => (
  <div className={classes.profileSection}>
    <div className={classes.profileImage}>
      <div className={classes.profileImageInner}>
        <div className={classes.profileImageWrapper}>
          <div className={classes.profileImageGradient}>
            <div className={classes.profileImagePic}>
              <img src={profileImg} alt="Profile Photo" loading="lazy" />
            </div>
          </div>
          <p className={classes.profileLabel}>Profile Picture</p>
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
      colorClass: classes.badgeCoffee,
    },
    {
      icon: <LightbulbIcon />,
      text: "Problem solver at heart",
      colorClass: classes.badgeLightbulb,
    },
    {
      icon: <HeartIcon />,
      text: "Passionate about AI/ML",
      colorClass: classes.badgeHeart,
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
    <section className={classes.section} id="home">
      <div className={classes.backgroundGradient} />
      <div className={classes.container}>
        <ProfileImage />

        <div className={classes.contentSection}>
          {/* Badges Section */}
          <div className={classes.badges}>
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
          <h1 className={classes.heading}>
            <span className={classes.headingGradient}>M Ahmed Asif</span>
          </h1>

          {/* Subtitle and Description */}
          <div className={classes.subtitle}>
            <h2 className={classes.subtitleHeading}>
              Full-Stack Developer & AI Enthusiast
            </h2>
            <p className={classes.subtitleText}>
              <span className={classes.subtitleQuote}>
                "I turn complex problems into elegant digital solutions."
              </span>
              <br />
              From AI-powered apps to enterprise web systems, I build technology
              that makes a real difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={classes.buttonContainer}>
            <button className={classes.buttonPrimary}>
              <EyeIcon />
              View Case Studies
            </button>

            <a
              href="https://docs.google.com/document/d/1MTCJRJwfR7AGZwTpFS78v_tl35gqBMch/edit?usp=sharing&ouid=114713764060503742733&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.buttonSecondary}
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <nav className={classes.socialLinks}>
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
      <div className={classes.scrollIndicator}>
        <ChevronDownIcon />
      </div>
    </section>
  );
};

export default TitleContent;
