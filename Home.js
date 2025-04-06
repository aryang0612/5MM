// 5 Minute Market – MVP Website
// Tech Stack: Next.js + TailwindCSS + Framer Motion + Notion CMS (placeholder for now)

import { useState } from "react";
import { motion } from "framer-motion";
import { InstagramEmbed } from "react-social-media-embed";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Markets");

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 bg-black z-50 border-b border-neutral-800 flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold tracking-wide">5 Minute Market</h1>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li className="hover:text-neutral-400 cursor-pointer">Home</li>
          <li className="hover:text-neutral-400 cursor-pointer">Explore</li>
          <li className="hover:text-neutral-400 cursor-pointer">Categories</li>
          <li className="hover:text-neutral-400 cursor-pointer">About</li>
          <li className="hover:text-neutral-400 cursor-pointer">Instagram</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-serif mb-4">
          Markets move fast. We break it down in 5.
        </motion.h2>
        <p className="text-lg text-neutral-300">Built for students, investors, and the market-curious who don’t read Bloomberg every morning.</p>
        <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-neutral-200 transition">Explore Recaps</button>
      </section>

      {/* Weekly Rhythm Section */}
      <section className="px-6 py-12 bg-neutral-950">
        <h3 className="text-2xl font-semibold text-center mb-6">Our Weekly Breakdown</h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-neutral-800 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Market Day</h4>
            <p className="text-sm text-neutral-300">Stock markets, macro, yields, inflation – explained fast.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Deal Day</h4>
            <p className="text-sm text-neutral-300">M&A, hedge funds, private equity moves you should know.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Breakdown Day</h4>
            <p className="text-sm text-neutral-300">Deep dives into the companies making headlines on the Street.</p>
          </div>
        </div>
      </section>

      {/* Instagram Embed */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold text-center mb-6">Latest on Instagram</h3>
        <div className="flex justify-center">
          <InstagramEmbed url="https://www.instagram.com/fiveminutemarket/" width={328} />
        </div>
      </section>

      {/* Why We Started */}
      <section className="px-6 py-12 bg-neutral-950 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Why We Started This</h3>
        <p className="text-neutral-300 text-sm">
          Too many students and young professionals feel left out of institutional finance news. It's fast, jargony, and hard to access. 5MM exists to cut through the noise — quick, visual, and sharp breakdowns of what matters most across markets, deals, and companies.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center border-t border-neutral-800 text-sm text-neutral-400">
        Built by 5MM • <a href="https://instagram.com/fiveminutemarket" className="underline ml-1">Instagram</a>
      </footer>
    </main>
  );
}
