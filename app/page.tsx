"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Cornell's Premier Sketch Comedy Troupe",
    "Making Campus Laugh Since 2006",
    "Where Prelims Meet Punchlines",
    "Seriously Funny, Seriously Fun"
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
            className="px-8 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Get Tickets 🎟️
          </a>
          <Link 
            href="/join" 
            className="px-8 py-3 border-2 border-[var(--color-accent)] rounded-full font-semibold hover:bg-[var(--color-accent)]/10 transform hover:scale-105 transition-all"
          >
            Join the Troupe
          </Link>
        </div>
        
        <div className="mt-12 flex gap-6">
          <a href="https://www.instagram.com/humorussketchcomedy/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[var(--color-accent)] transition-colors">
            📱
          </a>
          <a href="mailto:humoruscomedy@gmail.com" className="text-3xl hover:text-[var(--color-accent)] transition-colors">
            ✉️
          </a>
          <a href="https://venmo.com/u/humorus" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[var(--color-accent)] transition-colors">
            💸
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
              <h3 className="text-3xl font-bold mb-2">Fall Frenzy 2025</h3>
              <p className="text-lg mb-4 text-black/70 dark:text-white/70">
                Get ready for our biggest show yet! Featuring brand new sketches about dining hall disasters, 
                prelim panic, and why Cornell WiFi is actually sentient (and evil).
              </p>
              <div className="space-y-2 text-lg">
                <p>📅 <strong>November 15, 2025</strong></p>
                <p>📍 <strong>Schwartz Center Black Box</strong></p>
                <p>🕐 <strong>8:00 PM & 10:00 PM</strong></p>
                <p>💵 <strong>$5</strong> (Venmo: @humorus)</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <div className="w-full h-48 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-6xl mb-2">🎭</p>
                  <p className="font-bold">Show Poster Coming Soon!</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://venmo.com/u/humorus" target="_blank" className="px-6 py-2 bg-[var(--color-accent)] text-white rounded-md font-semibold hover:bg-[var(--color-accent-dark)] transition-colors">
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
          <div className="text-3xl font-bold text-[var(--color-accent)]">18+</div>
          <p className="text-sm text-black/70 dark:text-white/70">Years of Laughs</p>
        </div>
        <div className="rounded-lg border-2 border-[var(--color-accent-light)] p-4">
          <div className="text-3xl font-bold text-[var(--color-accent)]">50+</div>
          <p className="text-sm text-black/70 dark:text-white/70">Original Shows</p>
        </div>
        <div className="rounded-lg border-2 border-[var(--color-accent-light)] p-4">
          <div className="text-3xl font-bold text-[var(--color-accent)]">500+</div>
          <p className="text-sm text-black/70 dark:text-white/70">Sketches Written</p>
        </div>
        <div className="rounded-lg border-2 border-[var(--color-accent-light)] p-4">
          <div className="text-3xl font-bold text-[var(--color-accent)]">∞</div>
          <p className="text-sm text-black/70 dark:text-white/70">Bad Puns</p>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Explore HumorUs!</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/people" className="group relative rounded-xl border-2 p-6 hover:border-[var(--color-accent)] hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold text-lg mb-2">Meet the Cast</h3>
              <p className="text-sm text-black/70 dark:text-white/70">Get to know the funny folks who make it all happen</p>
            </div>
          </Link>
          
          <Link href="/about" className="group relative rounded-xl border-2 p-6 hover:border-[var(--color-accent)] hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold text-lg mb-2">Our Story</h3>
              <p className="text-sm text-black/70 dark:text-white/70">Learn about our history, process, and what makes us tick</p>
            </div>
          </Link>
          
          <Link href="/shows" className="group relative rounded-xl border-2 p-6 hover:border-[var(--color-accent)] hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="font-bold text-lg mb-2">Past Shows</h3>
              <p className="text-sm text-black/70 dark:text-white/70">Browse our archive of comedy gold from previous semesters</p>
            </div>
          </Link>
          
          <Link href="/alumni" className="group relative rounded-xl border-2 p-6 hover:border-[var(--color-accent)] hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Alumni Network</h3>
              <p className="text-sm text-black/70 dark:text-white/70">See where our comedy journey has taken past members</p>
            </div>
          </Link>
          
          <Link href="/join" className="group relative rounded-xl border-2 p-6 hover:border-[var(--color-accent)] hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-lg mb-2">Join Us</h3>
              <p className="text-sm text-black/70 dark:text-white/70">Ready to write, perform, and make Cornell laugh?</p>
            </div>
          </Link>
          
          <a href="https://www.instagram.com/humorussketchcomedy/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl border-2 p-6 hover:border-[var(--color-accent)] hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Follow Us</h3>
              <p className="text-sm text-black/70 dark:text-white/70">@humorussketchcomedy for clips, updates, and memes</p>
            </div>
          </a>
        </div>
      </section>

      {/* Testimonial */}
      <section className="rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white p-8 text-center">
        <p className="text-2xl font-medium mb-4 italic">
          "HumorUs has been the highlight of my Cornell experience. It's where I found my best friends, 
          discovered I could make people laugh, and learned that bombing on stage isn't the end of the world."
        </p>
        <p className="text-lg">– Every HumorUs Member Ever</p>
      </section>
    </div>
  );
}