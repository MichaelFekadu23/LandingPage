import { useEffect, useRef, useState } from "react";
import LanguageBadge from "./LanguageBadge";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 text-[#121417] backdrop-blur-xl dark:bg-[rgba(10,10,10,1)] dark:text-white">
      <div className="mx-auto flex h-16 sm:h-20 w-full max-w-[1450px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex shrink-0">
          <img
            src="/assets/logo-new.svg"
            alt="Moto"
            className="block dark:hidden"
          />
          <img
            src="/assets/logo-footer.svg"
            alt="Moto"
            className="hidden dark:block"
          />
        </div>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-base font-nexa text-[#121417] dark:text-white">
          <a className="hover:text-[#01C705]" href="#">Rider</a>
          <a className="hover:text-[#01C705]" href="#">Driver</a>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageBadge />
            <button className="rounded-md p-1.5 hover:bg-black/5 dark:hover:bg-white/5" aria-label="menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile actions */}
        <div className="relative md:hidden text-[#121417] dark:text-white">
          <button
            className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Overlay */}
          {open && (
            <div
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40"
              // clicking overlay also closes
              onClick={() => setOpen(false)}
            />
          )}

          {/* Dropdown panel */}
          <div
            id="mobile-menu"
            ref={panelRef}
            className={[
              "absolute right-0 top-12 z-50 w-56 origin-top-right rounded-2xl border border-black/10 dark:border-white/10",
              "bg-white/95 text-[#121417] backdrop-blur-md shadow-xl dark:bg-[rgba(20,20,20,0.95)] dark:text-white",
              "transition-all duration-150",
              open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
            ].join(" ")}
            role="menu"
            aria-hidden={!open}
          >
            <div className="p-2">
              <a
                href="#"
                role="menuitem"
                className="block w-full rounded-lg px-4 py-3 text-sm font-nexa hover:bg-black/5 dark:hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Rider
              </a>
              <a
                href="#"
                role="menuitem"
                className="mt-1 block w-full rounded-lg px-4 py-3 text-sm font-nexa hover:bg-black/5 dark:hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Driver
              </a>

              <div className="my-2 h-px bg-black/10 dark:bg-white/10" />

              {/* Language choice */}
              <div className="px-3 pb-2 pt-1">

                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <LanguageBadge />
                  {/* Optional: a simple text fallback or another language switch */}
                  {/* <button className="rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10">EN</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
