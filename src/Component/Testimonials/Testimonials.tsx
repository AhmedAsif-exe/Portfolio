import { YoutubeIcon } from "lucide-react";
import React, { useState, useEffect, memo } from "react";

// Icon Components
const QuoteIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#06b6d4] mb-4 md:mb-6 md:w-12 md:h-12"
    aria-hidden="true"
  >
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
  </svg>
));

const StarIcon = memo(() => (
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
    className="text-yellow-400 fill-current"
    aria-hidden="true"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
  </svg>
));

const ChevronLeftIcon = memo(() => (
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
    <path d="m15 18-6-6 6-6"></path>
  </svg>
));

const ChevronRightIcon = memo(() => (
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
    <path d="m9 18 6-6-6-6"></path>
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
));

const DiscordIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"></path>
  </svg>
));

const InstagramIcon = memo(() => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
));
// Types
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  organization: string;
  initials: string;
  rating: number;
  instagram?: string;
  discord?: string;
  youtube?: string;
  linkedin?: string;
}

// Testimonial Data
const testimonials: Testimonial[] = [
  {
    id: 2,
    quote:
      "Working with Ahmed has been rewarding. His technical competence and hardworking nature consistently deliver outstanding results. He excels at clear communication, explaining complex concepts effortlessly to stakeholders. His professionalism, reliability, and dedication make him an invaluable asset to any team. I highly recommend him without hesitation.",

    name: "Faiza Faizan",
    title: "Founder",
    organization: "AbaVirtual",
    initials: "FF",
    rating: 5,
    linkedin:
      "linkedin.com/in/faiza-faizan-b-s-qasp-s-509b03206/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BdqZnux2HTnixVmUOCTLTvQ%3D%3D",
    instagram: "https://www.instagram.com/aba.virtual/",
  },
  {
    id: 3,
    quote:
      "When I gave this project to Ahmed, I wasn’t sure if it was a one-person job, but, he singlehandedly not only built the website with all the required features, but also exceeded my expectations with the overall implementation. The website worked perfectly, ran smoothly, and I had no complaints. In fact, his suggestions for future improvements were very insightful and extremely helpful. All in all, I loved the work he did.",
    name: "Akiso",
    title: "Team Leader",
    organization: "Anime Anyway",
    initials: "AK",
    rating: 5,
    instagram: "https://www.instagram.com/anime_anyway_/?hl=en",
    youtube: "https://www.youtube.com/@ANIMEANYWAY",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFadeIn(true);
      }, 300);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeIn(true);
    }, 300);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToTestimonial(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    goToTestimonial(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#a78bfa] bg-clip-text text-transparent">
            What People Say
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-8 md:mb-16 text-sm md:text-base">
          Feedback from colleagues, supervisors, and mentors who've worked with
          me.
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-gray-800/50 hover:bg-[#06b6d4] text-gray-400 hover:text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-gray-800/50 hover:bg-[#06b6d4] text-gray-400 hover:text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon />
          </button>

          <div className="bg-[#0f172a] backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 transition-all duration-500 flex flex-col">
            <div
              className={`transition-all duration-300 flex-1 flex flex-col ${
                fadeIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <QuoteIcon />

              <div className="mb-6 md:mb-8">
                {/* Quote */}
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  "{currentTestimonial.quote}"
                </p>

                <div className="flex items-center gap-2  w-full justify-center sm:justify-start">
                  {Array.from({ length: currentTestimonial.rating }).map(
                    (_, index) => (
                      <StarIcon key={index} />
                    ),
                  )}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#06b6d4] to-[#a78bfa] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0f172a] font-bold text-base md:text-lg">
                      {currentTestimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {currentTestimonial.title}
                    </p>
                    <p className="text-[#06b6d4] text-sm font-medium">
                      {currentTestimonial.organization}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 md:gap-6">
                  {currentTestimonial.linkedin && (
                    <a
                      href={currentTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800/50 hover:bg-[#06b6d4] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <LinkedInIcon />
                        </div>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 group-hover:text-[#06b6d4] transition-colors">
                        LinkedIn
                      </span>
                    </a>
                  )}

                  {currentTestimonial.instagram && (
                    <a
                      href={currentTestimonial.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800/50 hover:bg-[#06b6d4] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <InstagramIcon />
                        </div>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 group-hover:text-[#06b6d4] transition-colors">
                        Instagram
                      </span>
                    </a>
                  )}

                  {currentTestimonial.youtube && (
                    <a
                      href={currentTestimonial.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800/50 hover:bg-[#06b6d4] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <YoutubeIcon />
                        </div>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 group-hover:text-[#06b6d4] transition-colors">
                        Youtube
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#06b6d4] w-8 md:w-8"
                    : "bg-gray-600 hover:bg-gray-500 w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
