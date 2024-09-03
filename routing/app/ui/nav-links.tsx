"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 justify-center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${pathname === link.href ? "active" : ""}`}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
