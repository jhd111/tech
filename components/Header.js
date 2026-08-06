"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { navItems } from "@/lib/nav-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change-ish (viewport resize back to desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md text-brand"
          : "bg-transparent text-white",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className={[
              "flex h-9 w-9 items-center justify-center rounded-full border-2 font-bold",
              scrolled ? "border-brand text-brand" : "border-white text-white",
            ].join(" ")}
            aria-hidden="true"
          >
            H
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide sm:text-base">
              H-TECH SUPPORTS
            </span>
            <span
              className={[
                "block text-[10px] tracking-wide sm:text-xs",
                scrolled ? "text-brand/70" : "text-white/80",
              ].join(" ")}
            >
              Delivering with pace and agility
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link
            href="/"
            className={[
              "rounded-md p-2 transition-colors",
              scrolled ? "hover:bg-brand/10" : "hover:bg-white/10",
            ].join(" ")}
            aria-label="Home"
          >
            <Home size={18} />
          </Link>

          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={[
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled ? "hover:bg-brand/10" : "hover:bg-white/10",
                ].join(" ")}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={[
                      "transition-transform duration-300",
                      openDropdown === item.label ? "rotate-180" : "",
                    ].join(" ")}
                  />
                )}
              </Link>

              {item.children && (
                <div
                  className={[
                    "absolute left-0 top-full min-w-[220px] rounded-lg border border-slate-100 bg-white py-2 text-slate-700 shadow-xl transition-all duration-200",
                    openDropdown === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0",
                  ].join(" ")}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm hover:bg-brand/5 hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Socials + CTA (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={scrolled ? "text-brand" : "text-white"}
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={scrolled ? "text-brand" : "text-white"}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={scrolled ? "text-brand" : "text-white"}
            >
              <Linkedin size={18} />
            </a>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-brand-dark"
          >
            Become A Partner
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "overflow-hidden bg-white text-brand shadow-lg transition-[max-height] duration-300 ease-in-out lg:hidden",
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          <Link href="/" className="rounded-md px-3 py-2 font-medium hover:bg-brand/5">
            Home
          </Link>
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-medium hover:bg-brand/5"
                onClick={() =>
                  setOpenDropdown((v) => (v === item.label ? null : item.label))
                }
              >
                <Link href={item.href}>{item.label}</Link>
                {item.children && (
                  <ChevronDown
                    size={16}
                    className={openDropdown === item.label ? "rotate-180" : ""}
                  />
                )}
              </button>
              {item.children && openDropdown === item.label && (
                <div className="ml-3 flex flex-col border-l border-brand/10 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-brand/5"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Become A Partner
          </Link>
        </nav>
      </div>
    </header>
  );
}
