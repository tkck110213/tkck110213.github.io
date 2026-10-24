
"use client";

import { useState, useEffect, useRef } from "react";

import Header from "../components/header";
import Recent from "../components/recent";
import Biography from "../components/biography";
import Archivements from "@/components/achievement";
import Awards from "@/components/awards";
import About from "../components/about";

type ContentType =
  | "news"
  | "educations"
  | "publications"
  | "awards";

const sections: Record<
  ContentType,
  { index: string; title: string; description: string }
> = {
  news: {
    index: "01",
    title: "News",
    description: "Latest updates & activities",
  },
  educations: {
    index: "02",
    title: "Biography",
    description: "Education & experience",
  },
  publications: {
    index: "03",
    title: "Publications",
    description: "Research & presentations",
  },
  awards: {
    index: "04",
    title: "Awards",
    description: "Honors & recognition",
  },
};

export default function Home() {
  const [activeContent, setActiveContent] =
    useState<ContentType>("news");

  const sectionRef = useRef<HTMLElement>(null);
  const isInitialRender = useRef(true);

  const current = sections[activeContent];

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeContent]);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#242424]">

      {/* Navigation */}
      <div className="sticky top-0 z-50 border-b border-[#E1DED7] bg-[#F7F6F2]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Header
            activeContent={activeContent}
            setActiveContent={(value: string) =>
              setActiveContent(value as ContentType)
            }
          />
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Hero / Profile */}
        <section className="border-b border-[#D8D5CE] pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#A49A8B]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8E877C]">
              Research Portfolio
            </span>
          </div>

          <div className="max-w-4xl">
            <About />
          </div>
        </section>

        {/* Content */}
        <section
          ref={sectionRef}
          id="content"
          className="scroll-mt-24 py-16 md:py-24"
        >
          {/* Section heading */}
          <div className="mb-12 md:mb-16">

            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#918A80]">
                {current.index} / INDEX
              </span>

              <span className="text-right text-xs tracking-wide text-[#918A80]">
                {current.description}
              </span>
            </div>

            <h1 className="font-serif text-5xl font-normal tracking-tight md:text-7xl lg:text-8xl">
              {current.title}
              <span className="text-[#A79D90]">.</span>
            </h1>

            <div className="mt-10 h-px w-full bg-[#D8D5CE]" />
          </div>

          {/* Content body */}
          <div
            key={activeContent}
            className="mx-auto min-h-[40vh] max-w-4xl animate-[fadeIn_0.3s_ease-out]"
          >
            {activeContent === "news" && <Recent />}

            {activeContent === "educations" && (
              <Biography />
            )}

            {activeContent === "publications" && (
              <Archivements />
            )}

            {activeContent === "awards" && <Awards />}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-3 border-t border-[#D8D5CE] py-10 text-xs text-[#918A80] sm:flex-row">
          <span>Research Portfolio</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto !important;
          }

          * {
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
