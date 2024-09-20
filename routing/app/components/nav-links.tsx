"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 justify-center">
      {navLinks.map((navLink, index) => (
        <Link
          key={index}
          href={navLink.href}
          className={`${pathname === navLink.href ? "active text-blue-400" : ""}`}
        >
          {navLink.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
