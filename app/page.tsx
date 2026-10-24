"use client";

import { useState } from 'react';
import Header from "../components/header";
import Recent from "../components/recent";
import Biography from "../components/biography";
import Archivements from "@/components/achievement";
import Awards from "@/components/awards";
import About from "../components/about";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen p-4 md:p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* プロフィールカード（大きめ） */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm">
          <About />
        </div>
        {/* ニュースカード */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <Recent />
        </div>
        {/* 業績・受賞歴カード */}
        <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm">
          <Archivements />
        </div>
      </div>
    </div>
  );
}
