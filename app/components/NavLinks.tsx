"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/shows", label: "Past Shows"},
    { href: "/people", label: "Meet the Cast!"},
    { href: "/about", label: "About"},
    { href: "/alumni", label: "Alumni"},
    { href: "/join", label: "Join Us!"},
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            px-3 py-2 rounded-full text-sm sm:text-base font-medium
            transition-all duration-200 hover:scale-105
            ${pathname === link.href 
              ? 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white shadow-lg' 
              : 'hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]'
            }
          `}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}