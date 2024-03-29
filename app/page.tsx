"use client"

import ProjectsSection from "@/components/projects/projects";
import React from "react";

export default function Home() {
  const TITLE = "IndrehusDev </>";

  return (
    <main className="min-w-full bg-gradient-to-br from-gray-900 via-gradient-mid to-gradient-start min-h-screen flex flex-col items-center backdrop-filter backdrop-blur-3xl">
      <h1 className="font-mono text-4xl mt-10  font-bold md:text-6xl md:mt-80">{TITLE}</h1>
      <div className="flex flex-col text-left gap-2 mt-2 px-4 md:px-0">
        <h2 className="font-bold font-mono text-xl mt-20 bg-gradient-to-br text-transparent bg-clip-text from-purple-500 to-pink-500 md:text-3xl md:mt-5">
          Developer
        </h2>
        <p className="font-mono font-xl">
          Hi! I am Kjetil Indrehus. I am a developer and a student. <br />
          Currently taking my Bachelors as Computer Engineering at NTNU Gjøvik
        </p>
      </div>

      <ProjectsSection />
    </main>
  );
}
