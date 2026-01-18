import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <div className="main-container">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider flip={true} />
      <Projects />
      <SectionDivider />
      <Contact />
    </div>
  );
}

export default App;
