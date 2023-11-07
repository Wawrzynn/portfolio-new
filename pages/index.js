import MetaHeaders from "@/components/global/MetaHeaders";
import Header from "@/components/home/Header";
import Tools from "@/components/home/Tools";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="Home" />
      <Header />
      <Projects />
      <Tools />
      <Contact />
    </div>
  );
}
