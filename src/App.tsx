import Hero from "./components/organisms/Hero";
import Divider from "./components/atoms/Divider";
import About from "./components/organisms/About";
import Projects from "./components/organisms/Projects";
import Skills from "./components/organisms/Skills";
import Experience from "./components/organisms/Experience";

function App() {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}

export default App;
