import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HumorUs! Sketch Comedy at Cornell",
  description: "Cornell's premier sketch comedy troupe — new shows every semester.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-[var(--background)] text-[var(--foreground)]">
        {/* 🔹 Site Header / Nav Bar */}
        <header className="border-b border-black/10 dark:border-white/15 bg-[var(--background)] sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex flex-wrap items-center gap-6 px-6 py-3">
            {/* “Home” link */}
            <Link href="/" className="font-bold text-lg">
              HumorUs
            </Link>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-4 text-sm sm:text-base">
              <Link href="/shows" className="hover:underline hover:underline-offset-4">
                Shows
              </Link>
              <Link href="/people" className="hover:underline hover:underline-offset-4">
                People
              </Link>
              <Link href="/about" className="hover:underline hover:underline-offset-4">
                About
              </Link>
              <Link href="/alumni" className="hover:underline hover:underline-offset-4">
                Alumni
              </Link>
              <Link href="/join" className="hover:underline hover:underline-offset-4">
                Join&nbsp;Us
              </Link>
            </div>
          </nav>
        </header>

        {/* 🔹 Main Page Content */}
        <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>

        {/* 🔹 Optional Footer */}
        <footer className="border-t border-black/10 dark:border-white/15 mt-16 py-6 text-center text-sm text-black/70 dark:text-white/70">
          © {new Date().getFullYear()} HumorUs! Sketch Comedy at Cornell · All rights reserved
        </footer>
      </body>
    </html>
  );
}