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
      {/* Hero Section with Animation */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[var(--color-accent)]/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[var(--color-highlight)]/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-highlight)] bg-clip-text text-transparent animate-gradient bg-300">
            HumorUs!
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-black/70 dark:text-white/70 mb-8 h-8 transition-all duration-500">
          {taglines[currentTagline]}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="https://venmo.com/u/humorus" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-[var(--color-accent)] rounded-full font-semibold hover:bg-[var(--color-accent)]/10 transform hover:scale-105 transition-all"
            /*className="px-8 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"*/
          >
            Get Tickets
          </a>
          <Link 
            href="/join" 
            className="px-8 py-3 border-2 border-[var(--color-accent)] rounded-full font-semibold hover:bg-[var(--color-accent)]/10 transform hover:scale-105 transition-all"
          >
            Join Us!
          </Link>
        </div>
        
        <div className="mt-12 flex gap-6">
          <a href="https://www.instagram.com/humorussketchcomedy/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[var(--color-accent)] transition-colors">
             <Image 
              src="/logos/instagram.svg" 
              alt="Instagram" 
              width={32} 
              height={32} 
              className="hover:opacity-80 transition-opacity" 
            />
          </a>
          <a href="mailto:humoruscomedy@gmail.com" className="text-3xl hover:text-[var(--color-accent)] transition-colors">
            <Image 
              src="/logos/gmail.svg" 
              alt="Gmail" 
              width={32} 
              height={32} 
              className="hover:opacity-80 transition-opacity" 
            />
          </a>
          <a href="https://venmo.com/u/humorus" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[var(--color-accent)] transition-colors">
            <Image 
              src="/logos/venmo-icon.svg" 
              alt="Venmo" 
              width={32} 
              height={32} 
              className="hover:opacity-80 transition-opacity" 
            />
          </a>
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
                Get ready for our biggest show yet! We're REALLY gonna push the envelope this time. Get ready to hate us.
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
          "HumorUs has been the highlight of my Cornell experience. It's where I found my best friends, 
          discovered I could make people laugh, and learned that bombing on stage isn't the end of the world."
        </p>
        <p className="text-lg">- Every HumorUs Member Ever</p>
      </section>
    </div>
  );
}