import Hero from "./components/organisms/Hero";
import Divider from "./components/atoms/Divider";
import About from "./components/organisms/About";
import Projects from "./components/organisms/Projects";
import Skills from "./components/organisms/Skills";
import Experience from "./components/organisms/Experience";
import Contact from "./components/organisms/Contact";

function App() {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
