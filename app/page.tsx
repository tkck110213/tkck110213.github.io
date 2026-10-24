
import About from "../components/about";
import Recent from "../components/recent";
import Biography from "../components/biography";
import Archivements from "@/components/achievement";
import Awards from "@/components/awards";

const navigation = [
  { label: "About", href: "#profile" },
  { label: "News", href: "#news" },
  { label: "Biography", href: "#education" },
  { label: "Publications", href: "#research" },
  { label: "Awards", href: "#honors" },
];

const sections = [
  {
    id: "news",
    number: "02",
    title: "News",
    description: "Latest updates & activities",
    component: <Recent />,
  },
  {
    id: "education",
    number: "03",
    title: "Biography",
    description: "Education & experience",
    component: <Biography />,
  },
  {
    id: "research",
    number: "04",
    title: "Publications",
    description: "Research papers & presentations",
    component: <Archivements />,
  },
  {
    id: "honors",
    number: "05",
    title: "Awards",
    description: "Honors & recognition",
    component: <Awards />,
  },
];

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#F7F6F2] text-[#242424]"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E1DED7] bg-[#F7F6F2]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 md:px-10">

          <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-8">

            {/* Logo */}
            <a
              href="#top"
              className="w-fit font-serif text-lg font-medium tracking-tight text-[#242424] transition-opacity hover:opacity-60"
            >
              Chota Kameya
              <span className="text-[#A79D90]">.</span>
            </a>

            {/* Navigation */}
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-6 overflow-x-auto pb-1 md:gap-8 md:pb-0"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 whitespace-nowrap border-b border-transparent py-1 text-sm text-[#777168] transition-colors duration-200 hover:border-[#242424] hover:text-[#242424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 md:px-10">

        {/* About */}
        <section
          id="profile"
          aria-labelledby="profile-title"
          className="scroll-mt-32 border-b border-[#D8D5CE] py-12 md:scroll-mt-24 md:py-16"
        >
          <h2 id="profile-title" className="sr-only">
            About
          </h2>

          <About />
        </section>

        {/* Main sections */}
        <div>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-32 border-b border-[#D8D5CE] py-16 md:scroll-mt-24 md:py-24"
            >
              
                {/* Section heading */}
                <div className="mb-10 md:mb-12">
                  <div className="flex items-center gap-5 rounded-sm bg-[#EDEAE4] px-6 py-7 sm:px-8 sm:py-9">
                
                    {/* Accent line */}
                    <span className="h-9 w-[3px] shrink-0 rounded-full bg-[#9B8B77]" />
                
                    {/* Title */}
                    <h2
                      id={`${section.id}-title`}
                      className="font-serif text-4xl font-normal tracking-tight text-[#242424] sm:text-5xl"
                    >
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Title */}
                <h2
                  id={`${section.id}-title`}
                  className="font-serif text-4xl font-normal tracking-tight text-[#242424] sm:text-5xl md:text-6xl"
                >
                  {section.title}
                  <span className="text-[#A79D90]">.</span>
                </h2>

                <div className="mt-8 h-px w-full bg-[#D8D5CE]" />
              </div>

              {/* Content */}
              <div className="mx-auto w-full max-w-4xl">
                {section.component}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="flex flex-col gap-5 py-10 text-xs text-[#918A80] sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} Chota Kameya
          </span>

          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-[#242424]"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </main>
    </div>
  );
}
