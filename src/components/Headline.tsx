export default function Headline() {
  return (
    <div className="mx-auto mt-4 max-w-8xl px-4 pb-20 sm:pb-24 text-center flex flex-col gap-4 sm:gap-6">
      <h2
        className="
          font-poppins font-semibold leading-tight
          text-[28px] sm:text-[36px] md:text-5xl xl:text-6xl
          lg:mt-6 xl:mt-10
        "
        style={{ color: "var(--black-80, #333)" }}
      >
        Your{" "}
        <span className="relative inline-block text-[#10C63A]">
          <span className="relative z-10">Next-Gen</span>

          {/* Underline SVG (responsive width, fixed at 402px on xl) */}
          <span
            className="
              absolute left-1/2 top-[53%] md:top-[40%] -translate-x-1/2 translate-y-1
              w-[240px] sm:w-[300px] md:w-[360px] lg:w-[380px] xl:w-[402px]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 402 43"
              className="h-[20px] sm:h-[25px] md:h-[60px] lg:h-[65px] xl:h-[70px] w-full"
              fill="none"
            >
              <path
                d="M2.68164 25.6537C2.68164 25.6537 37.0701 17.4199 65.8869 12.8091C94.1113 8.29309 109.538 5.75798 137.978 3.63284C158.68 2.08599 199.63 1.42328 203.192 6.31438C206.754 11.2055 144.694 30.075 144.694 32.2051C144.694 34.3352 192.806 30.5487 226.226 30.1051C262.73 29.6205 283.249 30.0463 319.679 32.5508C351.026 34.7059 399.722 40.9998 399.722 40.9998"
                stroke="url(#paint0_linear_322_1393)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_322_1393"
                  x1="-57.3906"
                  y1="21.7487"
                  x2="399.722"
                  y2="21.7487"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#174318" />
                  <stop offset="0.496578" stopColor="#CBFF00" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#174318" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>{" "}
        On-Demand
      </h2>

      <h3
        className="
          font-poppins font-semibold
          text-[28px] sm:text-[36px] md:text-5xl xl:text-6xl
          mt-1 sm:mt-2
        "
        style={{ color: "var(--black-80, #333)" }}
      >
        Rideshare Platform
      </h3>

      <p
        className="
          font-poppins font-medium leading-relaxed mx-auto
          text-[16px] sm:text-[18px] xl:text-[20px]
          mt-2 max-w-[48ch]
        "
        style={{ color: "var(--black-80, #333)" }}
      >
        Drivers Can Keep <span className="text-[#01C705]">100%</span>, and Riders
        Pay Less with Driver Bids.
      </p>
    </div>
  );
}
