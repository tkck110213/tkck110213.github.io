import Image from "next/image";
import Header from "../components/header"
import Biography from "../components/biography"

export default function Home() {
  return (
    <div>
      <Header />
      <Biography />
    </div>
  );
}