import Image from "next/image";
import Header from "../components/header"
import Biography from "../components/biography"
import Recent from "../components/recent"

export default function Home() {
  return (
    <div>
      <Header />
      <Recent />
      <Biography />
    </div>
  );
}