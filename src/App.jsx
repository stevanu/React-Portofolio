import "./index.css";
import "remixicon/fonts/remixicon.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Tools from "./components/Tools.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="container scroll-smooth mx-auto px-4">
      <Navbar />
      <Home />
      <AboutSection />
      <Tools />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
