"use client";

import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "WhatsApp",
    href: "https://wa.me/6287888055017",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/revialdyarif/",
  },
  {
    title: "Github",
    href: "https://github.com/RevialdyArif",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/reviarf/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none -z-10"></div>
      <div className="container"></div>
      <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
        <div className="text-white/40"> Thanks for visiting my site! </div>
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLinks.map((link) => (
            <a
              className="inline-flex items-center gap-1.5 z-50 hover:scale-110"
              href={link.href}
              key={link.title}
              target="_blank"
              rel="noopener noreferrer" // Tambahan untuk keamanan
            >
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
