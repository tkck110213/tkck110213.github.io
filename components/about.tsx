
import {
  FaGithub,
  FaEnvelope,
  FaOrcid,
  FaAddressCard,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Image from "next/image";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/tkck110213",
    icon: FaGithub,
  },
  {
    name: "Researchmap",
    url: "https://researchmap.jp/c.kameya",
    icon: FaAddressCard,
  },
  {
    name: "Email",
    url: "mailto:c.kameya@uec.ac.jp",
    icon: FaEnvelope,
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=uneQLVYAAAAJ",
    icon: SiGooglescholar,
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0009-0009-3290-0349",
    icon: FaOrcid,
  },
];

export default function About() {
  return (
    <div id="about" className="w-full max-w-4xl">

      {/* Profile */}
      <div className="flex items-center gap-5">
        <Image
          src="/profile.jpg"
          alt="Chota Kameya"
          width={80}
          height={80}
          priority
          className="h-20 w-20 shrink-0 rounded-full object-cover"
        />

        <div>
          <h1 className="font-serif text-3xl font-normal tracking-tight text-[#242424]">
            Chota Kameya
          </h1>

          <p className="mt-1 text-sm text-[#777168]">
            Ph.D. Student
          </p>

          <p className="mt-1 text-sm text-[#777168]">
            The University of Electro-Communications
          </p>
        </div>
      </div>

      {/* Introduction */}
      <p className="mt-8 max-w-2xl text-sm leading-8 text-[#494640] sm:text-base">
        芸術の美的鑑賞プロセスと認知モデルに関心があります.
        主に認知科学の分野で活動しています.
      </p>
      
     {/* Social links */}
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-7">
        {links.map(({ name, url, icon: Icon }) => {
          const isExternal = !url.startsWith("mailto:");

          return (
            <a
              key={name}
              href={url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={name}
              className="inline-flex shrink-0 items-center gap-2 rounded-md text-sm text-[#777168] transition-colors duration-200 hover:text-[#242424]"
            >
              <Icon size={18} className="shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
