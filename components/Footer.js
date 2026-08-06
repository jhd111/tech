import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navItems } from "@/lib/nav-data";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white font-bold">
              H
            </span>
            <span className="text-sm font-extrabold tracking-wide">
              H-TECH SUPPORTS
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Delivering with pace and agility. Global wireless and network
            services across more than 50 countries.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Pages
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            More
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.slice(4).map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>hello@htechsupports.com</li>
            <li>+1 (555) 010-2200</li>
            <li>Global HQ &middot; 50+ countries served</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} H-Tech Supports. All rights reserved.
      </div>
    </footer>
  );
}
