import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
    </main>
  );
}
