import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Skills from "./Component/Skills/Skills";
import Footer from "./Component/Footer/Footer";
import MyStory from "./Component/MyStory/MyStory";
import Journey from "./Component/Journey/Journey";
import Projects from "./Component/Projects/Projects";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import TitleContent from "./Component/TitleContent/TitleContent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <TitleContent />
      <MyStory />
      <Journey />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
