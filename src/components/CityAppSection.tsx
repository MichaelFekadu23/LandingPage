import { useTheme } from "../context/ThemeContext";
import GetTheAppButton from "./GetTheAppButton";


// src/components/CityAppSection.tsx
export default function CityAppSection() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section
      className="
        relative flex items-center justify-center overflow-hidden bg-white
        dark:bg-black
        h-[420px] sm:h-[500px] md:h-[600px] lg:h-[680px]
      "
    >
      {/* background image */}
      <img
        src={isDark ? "/assets/images/city-map-dark.svg" : "/assets/images/city-map.svg"}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover 2xl:h-auto 2xl:w-auto mx-auto"
        loading="lazy"
        decoding="async"
      />

      {/* overlay content */}
      <div className="relative z-[1] flex flex-col items-center justify-center px-4 text-center">
        <p
          className="
            max-w-[62ch] 2xl:max-w-[40ch] mb-5 font-nexa leading-[140%] text-[rgba(26,26,26,0.9)]
            dark:text-white
            text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px]
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
