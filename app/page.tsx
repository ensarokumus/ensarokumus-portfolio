import Hero from "@/components/organisms/Hero";
import Divider from "@/components/atoms/Divider";
import About from "@/components/organisms/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
    </main>
  );
}
