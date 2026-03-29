import type { Metadata } from "next";
import Link from "next/link";
import { NavLinks } from "./components/NavLinks";
import "./globals.css";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://humorussketchcomedy.com"),
  title: "HumorUs! Sketch Comedy at Cornell",
  description: "Cornell's premier sketch comedy group — new shows every semester. Making Cornell laugh since 2006",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/", // means the canonical URL is https://humoruscomedy.com/
  },
  openGraph: {
    title: "HumorUs! Sketch Comedy at Cornell",
    description: "Cornell's premier sketch comedy group.",
    url: "/",
    siteName: "HumorUs!",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HumorUs! Sketch Comedy at Cornell",
    description: "Cornell's premier sketch comedy group.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/shows", label: "Past Shows" },
    { href: "/people", label: "Meet the Cast!"},
    { href: "/about", label: "About"},
    { href: "/alumni", label: "Alumni"},
    { href: "/join", label: "Join Us!"},
  ];

  return (
    <html lang="en" className={playfair.variable}>
      <body className="antialiased font-sans bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b-2 border-[var(--color-accent)]/25 bg-[var(--color-bg)] sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Logo/Home */}
              <Link
                href="/"
                className="group flex items-center gap-2"
              >
               <Image
                  src="/logos/HumorUs_Logo.svg"
                  alt="HumorUs Logo"
                  width={240}
                  height={90}
                  priority
                  className="transition-transform group-hover:scale-105"
                  style={{ maxHeight: "96px" }}
                />
              </Link>

              {/* Navigation Links */}
              <NavLinks />

              {/* Quick Action Button */}
              <a
                href="https://venmo.com/u/harrygallen"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-white rounded font-semibold hover:bg-[var(--color-accent-dark)] transition-colors border border-[var(--color-accent-dark)]"
              >
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

        {/* Footer */}
        <footer className="border-t-2 border-[var(--color-accent)]/25 bg-[var(--color-surface-alt)] mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              {/* About Section */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-[var(--color-accent)]">HumorUs!</h3>
                <p className="text-sm text-black/70 dark:text-white/70">
                  {"Cornell's premier sketch comedy troupe. Making Cornell laugh since '06."}
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
                    href="https://www.instagram.com/humorussketchcomedy/"
                    className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                     <Image 
                        src="/logos/instagram.svg" 
                        alt="Instagram" 
                        width={20} 
                        height={20} 
                        className="hover:opacity-80 transition-opacity" 
                      />
                    <span>@humorussketchcomedy</span>
                  </a>
                  <a 
                    
                    href="mailto:humoruscomedy@gmail.com"  
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                   <Image 
                      src="/logos/gmail.svg" 
                      alt="Gmail" 
                      width={20} 
                      height={20} 
                      className="hover:opacity-80 transition-opacity" 
                    />
                    <span>humoruscomedy@gmail.com</span>
                  </a>
                  <a 
                    href="https://venmo.com/u/harrygallen" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 hover:text-[var(--color-accent)] transition-colors"
                  >
                   <Image 
                      src="/logos/venmo-icon.svg" 
                      alt="Venmo" 
                      width={20} 
                      height={20} 
                      className="hover:opacity-80 transition-opacity" 
                    />
                    <span>Venmo: @harrygallen</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 text-center">
              <p className="text-sm text-black/60 dark:text-white/60">
                © {new Date().getFullYear()} HumorUs! Sketch Comedy at Cornell
              </p>
            </div>
          </div>
        </footer>

        {/* Fun Easter Egg - Floating Comedy Masks (optional, remove if too much) */}
        <div className="fixed bottom-4 right-4 opacity-10 pointer-events-none z-0">
          <div className="text-6xl animate-pulse">
            <Image
              src="/logos/HumorUs_Logo.svg"
              alt="HumorUs Logo"
              width={160}
              height={60}
              priority
              className="transition-transform group-hover:scale-105"
              style={{ maxHeight: "48px" }}
            />  
          </div>
        </div>
      </body>
    </html>
  );
}