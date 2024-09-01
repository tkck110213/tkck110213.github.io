import Image from "next/image";
import Header from "../components/header"
import Biography from "../components/biography"
import Recent from "../components/recent"
import About from "../components/about"

export default function Home() {
  return (
    <div>
      <About />
      <Header />
      <Recent />
      <Biography />
    </div>
  );
}