# Ahmed Asif - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing full-stack development skills, AI/ML projects, and professional experience.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Modern UI** - Built with Tailwind CSS for clean, maintainable styling
- **Smooth Animations** - Custom CSS animations (fadeInUp, pulse-slow, bounce-slow)
- **Scroll Spy Navigation** - Active section highlighting as you scroll
- **Professional Resume** - Downloadable PDF resume with portfolio link
- **Testimonials Carousel** - Client and supervisor testimonials with auto-play
- **Projects Showcase** - Featured projects with tech stack details
- **Skills Matrix** - Organized by categories (Frontend, Backend, AI/ML, DevOps)
- **Contact Section** - Multiple ways to get in touch

## 📋 Tech Stack

### Frontend

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4.2** - Utilities-first styling
- **Lucide React** - Icon library

### Development Tools

- **React Scripts 5.0** - Build configuration
- **PostCSS & Autoprefixer** - CSS processing

### Hosting

- **Firebase** - Production deployment
- **GitHub** - Version control

## 📁 Project Structure

```
src/
├── Component/
│   ├── Contact/          # Contact information section
│   ├── Footer/           # Footer with links and copyright
│   ├── Journey/          # Professional experience timeline
│   ├── MyStory/          # About me section
│   ├── Navbar/           # Navigation with scroll spy
│   ├── Projects/         # Featured projects showcase
│   ├── Skills/           # Technical skills matrix
│   ├── Testimonials/     # Testimonials carousel
│   └── TitleContent/     # Hero section (100% Tailwind)
├── Utils/
│   ├── DataFile.tsx      # Shared data and constants
│   ├── Error/            # Error components
│   ├── Images/           # Image assets
│   └── svg/              # SVG assets
├── App.tsx               # Main app component
├── index.tsx             # React entry point
└── index.css             # Global styles & animations
```

## 🎨 Component Highlights

### TitleContent.tsx

- **100% Tailwind CSS** - Fully migrated from CSS Modules
- Responsive grid layout (1/3 profile : 2/3 content on desktop)
- Custom animations (fadeInUp, pulse-shadow)
- Mobile-optimized with smooth scroll behavior

### Testimonials.tsx

- Fixed-height carousel (600px min-height)
- Auto-play functionality with manual controls
- Responsive social icons
- Mobile-friendly navigation dots

### Navbar.tsx

- Fixed positioning with backdrop blur
- Intersection Observer for active section tracking (30% threshold)
- Smooth scrolling to sections
- Mobile hamburger menu

## 🔧 Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🌐 Environment

- **Node.js**: 16+
- **npm**: 7+
- **Browser**: Modern browsers with ES6+ support

## 📦 Dependencies Removed (Refactoring)

Cleaned up unused dependencies for better performance:

- ❌ Apollo Client & GraphQL
- ❌ Mantine UI components
- ❌ React Burger Menu
- ❌ Color Thief React
- ❌ Various carousel and scroll libraries
- ✅ Kept lightweight Lucide React for icons
- ✅ Tailwind CSS for all styling

## 🎯 Recent Updates

- **CSS to Tailwind Migration**: Converted TitleContent component from CSS Modules to Tailwind
- **Responsive Improvements**: Fixed mobile layout issues with proper breakpoints
- **Navbar Observer Fix**: Lowered threshold to 0.3 for better section highlighting
- **Testimonials Enhancement**: Standardized quote lengths and improved mobile responsiveness
- **Code Cleanup**: Removed unused Apollo, Mantine, and other unused dependencies
- **Performance**: Reduced bundle size by removing unused packages

## 📄 Resume

An ATS-friendly PDF resume is included in the portfolio:

- One-page format with optimized spacing
- Comprehensive project and experience details
- Scannable QR code linking to digital portfolio

## 🚀 Deployment

The portfolio is hosted on Firebase and automatically deployed from the main branch:

```bash
# Build optimized production build
npm run build

# Deploy to Firebase (requires firebase-tools)
firebase deploy
```

## 📞 Contact

- **Email**: ahmedaanasif@gmail.com
- **GitHub**: github.com/AhmedAsif-exe
- **LinkedIn**: linkedin.com/in/ahmed-asif-b62313334
- **Portfolio**: digital-odyssey-4bde3.web.app

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Sanity CMS for content management
- Firebase for reliable hosting
- React and the open source community
- All mentors, supervisors, and colleagues who supported this journey

---

**Last Updated**: March 3, 2026
