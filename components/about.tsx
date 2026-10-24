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
    <div id="about" className="w-full">

      {/* Profile */}
      <div className="flex items-center justify-between gap-5">

        {/* Name and affiliation */}
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-2xl font-normal tracking-tight text-[#242424] sm:text-3xl">
            Chota Kameya
          </h1>

          <p className="mt-2 text-sm text-[#777168]">
            Ph.D. Student
          </p>

          <p className="mt-1 text-sm leading-relaxed text-[#777168]">
            The University of Electro-Communications
          </p>
        </div>

        {/* Profile image */}
        <Image
          src="/profile.jpg"
          alt="Chota Kameya"
          width={96}
          height={96}
          priority
          className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24"
        />
      </div>

      {/* Introduction */}
      <p className="mt-6 max-w-2xl text-sm leading-7 text-[#494640] sm:text-base sm:leading-8">
        芸術の美的鑑賞プロセスと認知モデルに関心があります.
        主に認知科学の分野で活動しています.
      </p>

      {/* Social links */}
      <div className="mt-7 border-t border-[#D8D5CE] pt-5">
        <nav
          aria-label="Profile links"
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          {links.map(({ name, url, icon: Icon }) => {
            const isExternal = !url.startsWith("mailto:");

            return (
              <a
                key={name}
                href={url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={name}
                className="group inline-flex items-center gap-2 rounded-sm text-sm text-[#777168] transition-colors duration-200 hover:text-[#242424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A79D90]"
              >
                <Icon
                  size={17}
                  className="shrink-0"
                  aria-hidden="true"
                />

                <span className="whitespace-nowrap border-b border-transparent transition-colors group-hover:border-[#242424]">
                  {name}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
