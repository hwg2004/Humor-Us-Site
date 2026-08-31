"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/shows", label: "Past Shows" },
  { href: "/people", label: "Meet the Cast!" },
  { href: "/about", label: "About" },
  { href: "/alumni", label: "Alumni" },
  { href: "/join", label: "Join Us!" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-0.5">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-active={pathname === link.href}
          className="hu-nav-link"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
