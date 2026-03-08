"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import data from "@/data/portfolio.json";

const links = data.navLinks;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-5 md:px-10 flex items-center justify-between h-14">
        <a
          href="#"
          className="text-black dark:text-white font-bold text-sm tracking-wider"
        >
          {data.personal.navName}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={data.personal.resumePath}
            target="_blank"
            className="text-xs text-white dark:text-black bg-black dark:bg-white px-4 py-1.5 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 uppercase tracking-widest"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Vercel-style bottom line with + markers */}
      <div className="hidden lg:block max-w-4xl mx-auto">
        <div className="relative h-px bg-neutral-200 dark:bg-neutral-800">
          <div className="cross-marker left-0" />
          <div className="cross-marker left-full" />
        </div>
      </div>
      <div className="lg:hidden h-px bg-neutral-200 dark:bg-neutral-800" />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-black/95 backdrop-blur-sm">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest py-3"
              >
                {l.label}
              </a>
            ))}
            <a
              href={data.personal.resumePath}
              target="_blank"
              className="text-xs text-white dark:text-black bg-black dark:bg-white px-4 py-3 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors uppercase tracking-widest w-fit mt-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
