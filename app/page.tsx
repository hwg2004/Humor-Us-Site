"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Gallery from "./components/Gallery";

export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Cornell's Premier Sketch Comedy Group Since '06"
  ];

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[480px] w-full">
        {/* Background photo */}
        <Image
          src="/images/hero.jpg"
          alt="HumorUs cast on stage kicking in sync"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />

        {/* Dark scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        {/* Centered content with backdrop container */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center border border-white/10">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
              HumorUs!
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-white font-medium transition-opacity duration-500 drop-shadow-lg">
              {taglines[currentTagline]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://venmo.com/u/harrygallen"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-purple-500 backdrop-blur-sm !text-white rounded-full font-semibold hover:bg-purple-600 hover:scale-105 transition-all shadow-xl"
              >
                Get Tickets
              </a>
              <Link
                href="/join"
                className="px-8 py-3 bg-white/95 backdrop-blur-sm text-black rounded-full font-semibold hover:bg-purple-300 hover:scale-105 transition-all shadow-xl"
              >
                Join Us!
              </Link>
            </div>

            {/* Socials */}
            <div className="mt-8 flex gap-4 justify-center">
              <a 
                href="https://www.instagram.com/humorussketchcomedy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full transform hover:scale-110 hover:bg-white/30 transition-all border border-white/20"
                aria-label="Instagram"
              >
                <Image src="/logos/instagram.svg" alt="Instagram" width={24} height={24} className="brightness-0 invert" />
              </a>
              <a 
                href="mailto:humorussketchcomedy@cornell.edu"
                className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full transform hover:scale-110 hover:bg-white/30 transition-all border border-white/20"
                aria-label="Email"
              >
                <Image src="/logos/gmail.svg" alt="Gmail" width={24} height={24}/>
              </a>
              <a 
                href="https://venmo.com/u/harrygallen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full transform hover:scale-110 hover:bg-white/30 transition-all border border-white/20"
                aria-label="Venmo"
              >
                <Image src="/logos/venmo-icon.svg" alt="Venmo" width={24} height={24}/>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    <section className="relative">
      <div className="rounded-2xl border-4 border-yellow-400 bg-gradient-to-br from-yellow-400/20 to-transparent p-6 md:p-10 shadow-xl hover:shadow-2xl transition-shadow">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <h2 className="text-2xl font-bold">NEXT SHOW</h2>
        </div>

        {/* Main Card (no yellow border) */}
        <div className="bg-yellow-50 rounded-2xl shadow-md ring-1 ring-black/10 p-6 md:p-8">
          <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Text */}
            <div className="space-y-3 text-gray-800 max-w-prose">
              <h1 className="text-3xl font-bold">Side Effects May Include...</h1>
              <p className="text-lg text-gray-600">Get ready for our biggest show yet!</p>
              <div className="space-y-1 text-base">
                <p>📅 <strong>November 14, 2025</strong></p>
                <p>📍 Rockefeller Hall</p>
                <p>🕖 7:00 PM & 9:00 PM</p>
                <p>💵 $5 (Venmo: @harrygallen)</p>
              </div>
              <div className="pt-3 flex flex-wrap gap-3">
                <a href="https://venmo.com/u/harrygallen" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-2 bg-purple-500 !text-white rounded-md font-semibold hover:bg-purple-600 transition-colors">
                  Buy Tickets Now
                </a>
                <Link href="/shows"
                  className="px-6 py-2 border-2 border-purple-500 text-purple-500 rounded-md font-semibold hover:bg-purple-500 hover:text-white transition-colors">
                  See Past Shows
                </Link>
              </div>
            </div>

            {/* Poster */}
            <div className="mx-auto w-full max-w-sm md:max-w-md">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10">
                <Image src="/images/shows/FA25Poster.jpg" alt="HumorUs cast group photo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/*
      Quick Stats
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="rounded-lg border-2 border-purple-300 p-4 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">35+</div>
          <p className="text-sm text-black/70 dark:text-white/70">Shows Performed</p>
        </div>
        <div className="rounded-lg border-2 border-purple-300 p-4 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1000+</div>
          <p className="text-sm text-black/70 dark:text-white/70">Sketches Written</p>
        </div>
        <div className="rounded-lg border-2 border-purple-300 p-4 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">∞</div>
          <p className="text-sm text-black/70 dark:text-white/70">Bad Puns Made</p>
        </div>
        <div className="rounded-lg border-2 border-purple-300 p-4 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">18</div>
          <p className="text-sm text-black/70 dark:text-white/70">Years of Comedy</p>
        </div>
      </section>
      */}

      {/* Recent Photos / Gallery */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Recent Photos</h2>
        <Gallery
          ratio="3/2"
          images={[
            { src: "/images/gallery/DSC_0125.jpg", alt: "Group photo" },
            { src: "/images/gallery/DSC_0131.jpg", alt: "Group photo, bunz out" },
            { src: "/images/gallery/DSC_0138.jpg", alt: "The fellas" },
            { src: "/images/gallery/Referee_Sketch.jpg", alt: "Referee Sketch" },
            { src: "/images/gallery/DSC_0117.jpg", alt: "Fall 2024 Newbies" },
            { src: "/images/gallery/Charli_XCX_Sketch.jpg", alt: "Charli XCX Sketch" },
          ]}
        />
      </section>
    
      {/* Testimonial */}
      <section className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 text-center shadow-xl">
        <p className="text-2xl font-medium mb-4 italic">
          HumorUs rules.
        </p>
        <p className="text-lg">- Every HumorUs Member Ever</p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Laugh?</h2>
        <p className="text-lg mb-6 text-black/70 dark:text-white/70">
          {"Join us for a night of sketch comedy you won't forget!"}
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://venmo.com/u/harrygallen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Get Your Tickets
          </a>
          <Link
            href="/about"
            className="px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}