// src/components/ThemeToggle.tsx
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-1.5 hover:bg-black/5 transition-colors dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        // Sun icon for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1v2m0 18v2m11-11h-2M3 12H1m17.364 7.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-slate-700"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 12.79A9 9 0 0111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
