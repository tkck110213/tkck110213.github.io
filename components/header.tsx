
type HeaderProps = {
  activeContent: string;
  setActiveContent: (content: string) => void;
};

const navItems = [
  { id: "news", label: "News" },
  { id: "educations", label: "Biography" },
  { id: "publications", label: "Publications" },
  { id: "awards", label: "Awards" },
];

export default function Header({
  activeContent,
  setActiveContent,
}: HeaderProps) {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

        {/* Brand */}
        <button
          type="button"
          onClick={() => setActiveContent("news")}
          className="w-fit font-serif text-lg font-medium tracking-tight text-[#242424] transition-opacity hover:opacity-60 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A79D90]"
          aria-label="Chota Kameya - News"
        >
          Chota Kameya
          <span className="text-[#A79D90]">.</span>
        </button>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-x-6 gap-y-2 overflow-x-auto sm:gap-x-8"
        >
          {navItems.map((item) => {
            const isActive = activeContent === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveContent(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative shrink-0 whitespace-nowrap
                  pb-2 pt-1 text-sm
                  transition-colors duration-200
                  focus-visible:rounded-sm
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#A79D90]
                  ${
                    isActive
                      ? "font-medium text-[#242424]"
                      : "font-normal text-[#918A80] hover:text-[#242424]"
                  }
                `}
              >
                {item.label}

                {/* Active underline */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-0 left-0 h-px w-full
                    bg-[#242424] transition-opacity duration-200
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
