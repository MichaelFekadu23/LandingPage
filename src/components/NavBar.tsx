import LanguageBadge from "./LanguageBadge";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(10,10,10,1)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 sm:h-20 w-full max-w-[1450px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex shrink-0">
          <img src="/assets/logo-new.svg" alt="Moto" />
        </div>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-10 text-base font-nexa text-white">
          <a className="hover:text-[#01C705]" href="#">Rider</a>
          <a className="hover:text-[#01C705]" href="#">Driver</a>
          <div className="flex items-center gap-4">
            <LanguageBadge />
            <button className="rounded-md p-1.5 hover:bg-white/5" aria-label="menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden text-white">
          <button className="rounded-md p-2 hover:bg-white/5" aria-label="menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
