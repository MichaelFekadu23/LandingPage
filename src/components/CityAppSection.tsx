import GetTheAppButton from "./GetTheAppButton";

// src/components/CityAppSection.tsx
export default function CityAppSection() {
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden bg-white dark:bg-charcoal-900
        h-[420px] sm:h-[500px] md:h-[600px] lg:h-[680px]
      "
    >
      {/* background image */}
      <img
        src="/assets/images/city-map.svg" // <-- replace with your SVG path
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover 2xl:h-auto 2xl:w-auto mx-auto"
        loading="lazy"
        decoding="async"
      />

      {/* overlay content */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60" aria-hidden="true" />

      <div className="relative z-[1] flex flex-col items-center justify-center px-4 text-center text-[#121417] dark:text-white">
        <p
          className="
            max-w-[62ch] 2xl:max-w-[40ch] mb-5 font-nexa leading-[140%] text-[rgba(26,26,26,0.9)]
            text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] dark:text-white
          "
        >
          <span className="text-[rgba(1,199,5,1)]">Moto</span> offers the
          speed of instant rides, the control of negotiation, and the savings of
          bidding—all in one app.
        </p>

        <GetTheAppButton />
      </div>
    </section>
  );
}
