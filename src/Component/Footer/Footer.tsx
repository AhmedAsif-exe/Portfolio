const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700 bg-[#0f172a]"
      id="footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#06b6d4] to-[#a78bfa] bg-clip-text text-transparent mb-4">
              Ahmed Asif
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer passionate about creating innovative
              solutions that make a real difference.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#a78bfa]">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#projects"
                className="block text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                Projects
              </a>
              <a
                href="#journey"
                className="block text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                Journey
              </a>
              <a
                href="#testimonials"
                className="block text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#a78bfa]">Resources</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mail"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/AhmedAsif-exe"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-asif-b62313334/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © {year} M Ahmed Asif. Crafted with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
