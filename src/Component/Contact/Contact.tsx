import React from "react";
import {
  Globe,
  BarChart3,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a2525]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#C8A796] to-[#F4F3F8] bg-clip-text text-transparent">
            Let's Build Something Amazing
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          Ready to turn your ideas into reality? I&apos;m always excited to
          discuss new projects, opportunities, and ways we can create impactful
          solutions together.
        </p>

        <div className="bg-gradient-to-br from-[#C8A796]/20 to-[#F4F3F8]/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-[#C8A796]">
            Currently Available For
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Globe size={32} className="text-[#C8A796] mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">
                Full-Stack Development
              </h4>
              <p className="text-gray-400 text-sm">
                Web applications, APIs, and database design
              </p>
            </div>

            <div className="text-center">
              <BarChart3 size={32} className="text-[#F4F3F8] mx-auto mb-3" />
              <h4 className="font-semibold mb-2 text-white">Data Analytics</h4>
              <p className="text-gray-400 text-sm">
                Data visualization and data mining insights
              </p>
            </div>

            <div className="text-center">
              <Lightbulb size={32} className="text-yellow-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2 text-white">
                AI/ML Integration
              </h4>
              <p className="text-gray-400 text-sm">
                Computer vision and intelligent systems
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
            <Mail size={32} className="text-[#C8A796] mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-white">Email</h3>
            <a
              href="mailto:ahmedaanasif@gmail.com"
              className="text-gray-400 hover:text-[#C8A796] transition-colors break-all"
            >
              ahmedaanasif@gmail.com
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
            <Phone size={32} className="text-[#F4F3F8] mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-white">Phone</h3>
            <a
              href="tel:+923219555501"
              className="text-gray-400 hover:text-[#F4F3F8] transition-colors"
            >
              +92 321 9555501
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
            <MapPin size={32} className="text-[#F4F3F8] mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-white">Location</h3>
            <p className="text-gray-400">Rawalpindi, Pakistan</p>
            <p className="text-gray-500 text-sm">Available for remote work</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://github.com/AhmedAsif-exe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-[#C8A796] p-4 rounded-full transition-colors duration-200 flex items-center gap-2 text-white hover:text-white"
          >
            <Github size={24} />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-asif-b62313334/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-[#C8A796] p-4 rounded-full transition-colors duration-200 flex items-center gap-2 text-white hover:text-white"
          >
            <Linkedin size={24} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="mailto:ahmedaanasif@gmail.com"
            className="bg-gray-700 hover:bg-[#C8A796] p-4 rounded-full transition-colors duration-200 flex items-center gap-2 text-white hover:text-white"
          >
            <Mail size={24} />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
