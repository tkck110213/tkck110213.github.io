import Image from "next/image";
import Header from "../components/header"
import Biography from "../components/biography"
import Recent from "../components/recent"
import About from "../components/about"
import Archivements from "@/components/achievement";
import Awards from "@/components/awards";

export default function Home() {
  return (
    <div>
      <Header activeContent={activeContent} setActiveContent={setActiveContent} />
      <div className="container mx-auto flex flex-col md:flex-row mt-8">
        <aside className="w-full md:w-1/4 p-4">
          <About />
        </aside>
        
        <main className="w-full md:w-3/4 p-4">
          {activeContent === 'news' && <Recent />}
          {activeContent === 'educations' && <Biography />}
          {activeContent === 'publications' && <Archivements />}
          {activeContent === 'awards' && <Awards />}
          {/* activeContent === 'works' && <Works /> */}
        </main>
      </div>
    </div>
  );
}
