import Image from "next/image";
import Header from "../components/header"
import Biography from "../components/biography"
import Recent from "../components/recent"
import About from "../components/about"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row mt-8">
        <aside className="w-full md:w-1/4 p-4">
          <About />
        </aside>
        <main className="w-full md:w-3/4 p-4">
          <Recent />
          <Biography />
        </main>
      </div>
    </div>
  );
}