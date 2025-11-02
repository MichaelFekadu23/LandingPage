import { useTheme } from "../context/ThemeContext";
import Headline from "./Headline";

export default function HeadlineWrapper() {
  const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
  return (
    <div
      className="
        relative overflow-hidden flex flex-col items-center 
        bg-[#F7F7F7] dark:bg-black transition-colors duration-300
      "
    >
      {/* SVG + Headline */}
      <svg
        className="mt-3 z-50"
        width="16"
        height="61"
        viewBox="0 0 16 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 1.5L9.5 -6.55671e-08L6.5 6.55671e-08L6.5 1.5L8 1.5L9.5 1.5ZM8 44.5C3.58172 44.5 2.03615e-06 48.0817 2.22928e-06 52.5C2.42241e-06 56.9183 3.58172 60.5 8 60.5C12.4183 60.5 16 56.9183 16 52.5C16 48.0817 12.4183 44.5 8 44.5ZM8 1.5L6.5 1.5L6.5 52.5L8 52.5L9.5 52.5L9.5 1.5L8 1.5Z"
          fill="url(#paint0_linear_322_1414)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_322_1414"
            x1="7.5"
            y1="1.5"
            x2="7.5"
            y2="52.5"
            gradientUnits="userSpaceOnUse"
          >
            {!isDark ? (
              <stop stopColor="white" />
            ) : (
              <stop stopColor="black" />
            )}
            <stop offset="1" stopColor="#01C705" />
          </linearGradient>
        </defs>
      </svg>

      <Headline />

      {/* Decorative blurred rectangles */}
      <div
        className="absolute"
        style={{
          bottom: "10px",
          right: "0px",
          width: "58.634px",
          height: "220px",
          background: "rgba(0,126,3,0.12)",
          filter: "blur(40px)",
          borderRadius: "32px",
          pointerEvents: "none",
          transform: "rotate(-58deg)",
          transformOrigin: "bottom right",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "0",
          right: "100px",
          width: "58.634px",
          height: "220px",
          background: "rgba(0,126,3,0.12)",
          filter: "blur(40px)",
          borderRadius: "32px",
          pointerEvents: "none",
          transform: "rotate(-58deg)",
          transformOrigin: "bottom right",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "0",
          right: "30%",
          width: "150px",
          height: "80px",
          background: "rgba(0,126,3,0.12)",
          filter: "blur(50px)",
          borderRadius: "32px",
          pointerEvents: "none",
          transform: "rotate(-5deg)",
          transformOrigin: "bottom right",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "50%",
          right: "0",
          width: "50px",
          height: "80px",
          background: "rgba(0,126,3,0.12)",
          filter: "blur(50px)",
          borderRadius: "32px",
          pointerEvents: "none",
          transform: "rotate(-5deg)",
          transformOrigin: "bottom right",
        }}
      />
    </div>
  );
}
