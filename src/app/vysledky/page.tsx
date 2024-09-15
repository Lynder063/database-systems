"use client";

import Vysledky from "../md-files/vysledky.mdx";
import "highlight.js/styles/atom-one-dark.css";
import Navbar from "../(components)/navbar";
import Footbar from "../(components)/footer";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Navbar />
      <main className="flex items-center justify-center min-h-screen text-black px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-4xl">
          <Vysledky />
        </div>
      </main>

      <Footbar />
    </div>
  );
}
