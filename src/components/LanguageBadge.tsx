export default function LanguageBadge() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-black/5 px-2 py-1 text-xs text-[#121417] dark:bg-white/5 dark:text-white">
      <img
        alt="Amharic flag placeholder"
        src="/assets/eth.svg"
        className="h-5 w-5 rounded-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <span>Am</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );
}