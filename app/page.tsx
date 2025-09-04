"use client";

import { useState } from 'react';
import Header from "../components/header";
import Recent from "../components/recent";
import Biography from "../components/biography";
import Archivements from "@/components/achievement";
import Awards from "@/components/awards";
import About from "../components/about";

export default function Home() {
  const [activeContent, setActiveContent] = useState('news');

  return (
    <div className="bg-[#F9F9F9]">
      <Header activeContent={activeContent} setActiveContent={setActiveContent} />
      
      <div className="container mx-auto flex flex-col md:flex-row mt-8">
        <aside className="w-full md:w-3/10 p-4">
          <About />
        </aside>
        
        <main className="w-full md:w-7/10 p-4">
          {activeContent === 'news' && <Recent />}
          {activeContent === 'educations' && <Biography />}
          {activeContent === 'publications' && <Archivements />}
          {activeContent === 'awards' && <Awards />}
          {/* 他のコンテンツ */}
        </main>
      </div>
    </div>
  );
}
