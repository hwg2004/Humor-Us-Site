"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Gallery from "./components/Gallery";


export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Cornell's Premier Sketch Comedy Group Since '06",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          className="object-cover object-[50%_35%]" // shift focal point up a bit
        />

        {/* Dark scrim for text readability */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/30" />

        {/* Centered content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {/* Big text or logo – pick ONE of these blocks */}

          {/* A) Text */}
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow">
            HumorUs!
          </h1>

          {/* B) Or the logo (comment the <h1> above out if you use this) */}
          {/*
          <Image
            src="/logos/HumorUs_Logo.svg"
            alt="HumorUs Sketch Comedy Logo"
            width={760}
            height={240}
            priority
            className="drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
          />
          */}

          <p className="mt-4 text-lg sm:text-xl text-white/90">
            Cornell's Premier Sketch Comedy Group Since ’06
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://venmo.com/u/humorus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/90 text-black rounded-full font-semibold hover:bg-white transition-all"
            >
              Get Tickets
            </a>
            <Link
              href="/join"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Join Us!
            </Link>
          </div>

          {/* Socials */}
          <div className="mt-8 flex gap-6">
            <a href="https://www.instagram.com/humorussketchcomedy/" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/instagram.svg" alt="Instagram" width={32} height={32} className="opacity-90 hover:opacity-100" />
            </a>
            <a href="mailto:humoruscomedy@gmail.com">
              <Image src="/logos/gmail.svg" alt="Gmail" width={32} height={32} className="opacity-90 hover:opacity-100" />
            </a>
            <a href="https://venmo.com/u/humorus" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/venmo-icon.svg" alt="Venmo" width={32} height={32} className="opacity-90 hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      {/* Next Show Card - Featured */}
      <section className="relative">
        <div className="rounded-2xl border-4 border-[var(--color-highlight)] bg-gradient-to-br from-[var(--color-highlight)]/10 to-transparent p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <h2 className="text-2xl font-bold">NEXT SHOW</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">For All the Hogs</h3>
              <p className="text-lg mb-4 text-black/70 dark:text-white/70">
                {"Get ready for our biggest show yet! We're REALLY gonna push the envelope this time. Get ready to hate us."}
              </p>
              <div className="space-y-2 text-lg">
                <p>📅 <strong>November 14, 2025</strong></p>
                <p>📍 <strong>Rockefeller Hall</strong></p>
                <p>🕐 <strong>7:00 PM & 9:00 PM</strong></p>
                <p>💵 <strong>$8</strong> (Venmo: @humorus)</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <div className="w-full h-48 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-6xl mb-2">🐷</p>
                  <p className="font-bold">Show Poster Coming Soon!</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://venmo.com/u/humorus" target="_blank" className="px-6 py-2 border-2 border-[var(--color-accent)] rounded-md font-semibold hover:bg-[var(--color-accent)]/10 transition-colors">
                  Buy Tickets Now
                </a>
                <Link href="/shows" className="px-6 py-2 border-2 border-[var(--color-accent)] rounded-md font-semibold hover:bg-[var(--color-accent)]/10 transition-colors">
                  See Past Shows
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="rounded-lg border-2 border-[var(--color-accent-light)] p-4">
          <div className="text-3xl font-bold text-[var(--color-accent)]">5,000+</div>
          <p className="text-sm text-black/70 dark:text-white/70">Original Shows</p>
        </div>
        <div className="rounded-lg border-2 border-[var(--color-accent-light)] p-4">
          <div className="text-3xl font-bold text-[var(--color-accent)]">100,000+</div>
          <p className="text-sm text-black/70 dark:text-white/70">Sketches Written</p>
        </div>
        <div className="rounded-lg border-2 border-[var(--color-accent-light)] p-4">
          <div className="text-3xl font-bold text-[var(--color-accent)]">$8,000,000</div>
          <p className="text-sm text-black/70 dark:text-white/70">Made from Ticket Sales</p>
        </div>
         <div className="rounded-lg border-2 border-[var(--color-accent-light)] p-4">
          <div className="text-3xl font-bold text-[var(--color-accent)]">18</div>
          <p className="text-sm text-black/70 dark:text-white/70">Years Since the Incident.</p>
        </div>
      </section>

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
      <section className="rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white p-8 text-center">
        <p className="text-2xl font-medium mb-4 italic">
          {'"HumorUs has been the highlight of my Cornell experience. It\'s where I found my best friends, discovered I could make people laugh, and learned that bombing on stage isn\'t the end of the world."'}
        </p>
        <p className="text-lg">- Every HumorUs Member Ever</p>
      </section>
    </div>
  );
}