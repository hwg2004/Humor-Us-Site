import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Archivo, Archivo_Black, Space_Mono } from "next/font/google";
import { NavLinks } from "./components/NavLinks";
import { Marquee } from "./components/Marquee";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://humorussketchcomedy.com"),
  title: "HumorUs! Sketch Comedy at Cornell",
  description:
    "Cornell's premier sketch comedy group — new shows every semester. Making Cornell laugh since 2006",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
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
  },
};

const footerLinks = [
  { href: "/shows", label: "Past Shows" },
  { href: "/people", label: "Meet the Cast!" },
  { href: "/about", label: "About" },
  { href: "/alumni", label: "Alumni" },
  { href: "/join", label: "Join Us!" },
  {
    href: "https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment",
    label: "Equal Education and Employment",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoBlack.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        {/* ---------- Header ---------- */}
        <header className="sticky top-0 z-50 bg-[var(--color-paper)] border-b-4 border-[var(--color-ink)]">
          <Marquee />
          <nav className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 py-3.5 md:px-10">
            <Link href="/" aria-label="HumorUs home" className="flex items-center">
              <Image
                src="/logos/HumorUs_Logo.svg"
                alt="HumorUs Logo"
                width={240}
                height={90}
                priority
                className="h-16 w-auto"
              />
            </Link>

            <NavLinks />

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYapA0lETw0BO8-ZuKRAKdle_F8aHmh9Zjll_kfZeoG_uWQQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hu-btn hu-btn-primary !px-6 !py-3 !text-sm"
            >
              Audition Now
            </a>
          </nav>
        </header>

        {/* ---------- Main ---------- */}
        <main className="flex-1">{children}</main>

        {/* ---------- Footer ---------- */}
        <footer className="border-t-4 border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
            <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1.1fr]">
              <div>
                <Image
                  src="/logos/HumorUs_Logo.svg"
                  alt="HumorUs Logo"
                  width={200}
                  height={75}
                  className="h-14 w-auto brightness-0 invert"
                />
                <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-[var(--color-paper)]/70">
                  This organization is a registered student organization of Cornell University.
                </p>
              </div>

              <div>
                <h3 className="hu-label mb-[18px] text-[var(--color-marquee)]">Quick Links</h3>
                <div className="grid gap-2.5">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[15px] text-[var(--color-paper)]/[0.78] hover:text-[var(--color-marquee)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="hu-label mb-[18px] text-[var(--color-marquee)]">Connect</h3>
                <div className="grid gap-3.5">
                  <a
                    href="https://www.instagram.com/humorussketchcomedy/"
                    className="flex items-center gap-3 text-[15px] text-[var(--color-paper)]/[0.78] hover:text-[var(--color-marquee)]"
                  >
                    <Image
                      src="/logos/instagram.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                    <span>@humorussketchcomedy</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@HumorUsComedy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[15px] text-[var(--color-paper)]/[0.78] hover:text-[var(--color-marquee)]"
                  >
                    <Image src="/logos/youtube.svg" alt="YouTube" width={22} height={16} />
                    <span>@HumorUsComedy</span>
                  </a>
                  <a
                    href="mailto:humoruscomedy@gmail.com"
                    className="flex items-center gap-3 text-[15px] text-[var(--color-paper)]/[0.78] hover:text-[var(--color-marquee)]"
                  >
                    <Image src="/logos/gmail.svg" alt="Gmail" width={20} height={20} />
                    <span>humoruscomedy@gmail.com</span>
                  </a>
                  <a
                    href="https://venmo.com/u/harrygallen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[15px] text-[var(--color-paper)]/[0.78] hover:text-[var(--color-marquee)]"
                  >
                    <Image src="/logos/venmo-icon.svg" alt="Venmo" width={20} height={20} />
                    <span>Venmo: @harrygallen</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hu-label mt-12 border-t border-[var(--color-paper)]/20 pt-7 text-center !tracking-[0.16em] text-[var(--color-paper)]/60">
              © {new Date().getFullYear()} HumorUs! Sketch Comedy at Cornell
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
