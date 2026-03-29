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
            px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-150
            ${pathname === link.href
              ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]'
              : 'hover:text-[var(--color-accent)] border-b-2 border-transparent'
            }
          `}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}