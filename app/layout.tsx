import type { Metadata } from "next";
import Link from "next/link";
import { NavLinks } from "./components/NavLinks";
import "./globals.css";

export const metadata: Metadata = {
  title: "HumorUs! Sketch Comedy at Cornell",
  description: "Cornell's premier sketch comedy troupe — new shows every semester. Making campus laugh since 2006!",
  keywords: ["comedy", "sketch", "Cornell", "university", "humor", "performance", "theatre"],
  openGraph: {
    title: "HumorUs! Sketch Comedy at Cornell",
    description: "Cornell's premier sketch comedy troupe",
    images: ["/images/og-image.jpg"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/shows", label: "Past Shows", emoji: "🎬" },
    { href: "/people", label: "Meet the Cast!", emoji: "👥" },
    { href: "/about", label: "About", emoji: "📖" },
    { href: "/alumni", label: "Alumni", emoji: "🎓" },
    { href: "/join", label: "Join Us!", emoji: "✨" },
  ];

  return (
    <html lang="en">
      <body className="antialiased font-sans bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen flex flex-col">
        {/* Enhanced Header */}
        <header className="border-b-2 border-[var(--color-accent-light)]/30 bg-[var(--color-bg)]/95 backdrop-blur-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Logo/Home with animation */}
              <Link 
                href="/" 
                className="group flex items-center gap-2 transition-transform hover:scale-105"
              >
                <span className="text-3xl group-hover:rotate-12 transition-transform">🎭</span>
                <span className="font-bold text-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
                  HumorUs!
                </span>
              </Link>

              {/* Navigation Links */}
              <NavLinks />

              {/* Quick Action Button */}
              <a 
                href="https://venmo.com/u/humorus" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[var(--color-highlight)] text-black rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                <span>🎟️</span>
                <span>Get Tickets</span>
              </a>
            </div>
          </nav>
        </header>

        {/* Main Content with flex-grow for sticky footer */}
        <main className="flex-grow w-full">
          <div className="max-w-6xl mx-auto px-6 py-8">
            {children}
          </div>
        </main>

        {/* Enhanced Footer */}
        <footer className="border-t-2 border-[var(--color-accent-light)]/30 bg-gradient-to-b from-transparent to-[var(--color-accent)]/5 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              {/* About Section */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-[var(--color-accent)]">HumorUs!</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Cornell&apos;s premier sketch comedy troupe. Making campus laugh since 2006 with original 
                  sketches, memorable characters, and questionable life choices.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-[var(--color-accent)]">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-black/70 dark:text-white/70 hover:text-[var(--color-accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact & Social */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-[var(--color-accent)]">Connect</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:humoruscomedy@gmail.com" 
                    className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span>✉️</span>
                    <span>humoruscomedy@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/humorussketchcomedy/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span>📱</span>
                    <span>@humorussketchcomedy</span>
                  </a>
                  <a 
                    href="https://venmo.com/u/humorus" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span>💸</span>
                    <span>Venmo: @humorus</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 text-center">
              <p className="text-sm text-black/60 dark:text-white/60">
                © {new Date().getFullYear()} HumorUs! Sketch Comedy at Cornell
              </p>
              <p className="text-xs text-black/50 dark:text-white/50 mt-2">
                Making bad jokes and good memories since 2006 • Located in Ithaca, NY where the prelims are made up and the grades don&apos;t matter
              </p>
            </div>
          </div>
        </footer>

        {/* Fun Easter Egg - Floating Comedy Masks (optional, remove if too much) */}
        <div className="fixed bottom-4 right-4 opacity-10 pointer-events-none z-0">
          <div className="text-6xl animate-pulse">🎭</div>
        </div>
      </body>
    </html>
  );
}