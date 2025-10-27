// src/components/CallToOrder.tsx
import React from "react";

function ParallelogramTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="
        relative
        xs:w-32 sm:w-40 md:w-44 lg:w-[186.887px]
        aspect-[187/251]
        flex justify-center items-center
      "
    >
      <img
        src={src}
        className="h-[70%] w-[70%] md:h-full md:w-full object-cover"
        alt={alt}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 186px, 40vw"
      />
    </div>
  );
}


export default function CallToOrder() {
  const phoneBadgeSrc = "/assets/phone-badge.svg";

  const tiles = [
    { src: "/assets/tiles/tile1.png", digit: "8" },
    { src: "/assets/tiles/tile2.png", digit: "7" },
    { src: "/assets/tiles/tile3.png", digit: "7" },
    { src: "/assets/tiles/tile4.png", digit: "8" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Mobile/tablet: stack; Desktop: 3-area grid */}
        <div className="grid items-center 2xl:gap-8 xl:grid-cols-[1fr_auto_1fr]">
          {/* Left: copy */}
          <div className="max-w-3xl">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Badge with glow */}
              <div
                className="mt-1 rounded-lg px-2 py-2 shadow-md sm:mt-2"
                style={{ boxShadow: "0 3px 10px 1px #01C705" }}
              >
                <img
                  src={phoneBadgeSrc}
                  alt="Phone"
                  loading="lazy"
                  decoding="async"
                  width={48}
                  height={48}
                />
            </div>

            <div className="flex flex-col gap-3 xl:gap-0 font-nexa text-[#01C705] leading-[150%]
                              text-[18px] md:text-[22px] lg:text-[24px] 2xl:text-[26px]">
              <div>
                Low on Data? Don't Stress.

              </div>
              <div className="xl:mt-3">Order your ride with just a quick call.</div>
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <p className="font-nexa text-[rgba(26,26,26,0.65)] leading-[150%]
                          text-base sm:text-base md:text-2xl">
              Even offline, Moto keeps you connected and moving. Simply call
              our dispatch line,{" "}
              <a href="tel:8778" className="font-semibold text-[#01C705]">
                8778
              </a>
              , and we'll get you where you need to go.
            </p>
          </div>
          </div>

          {/* Center: subtle green divider line (desktop only) */}
          <div className="relative hidden h-[1px] w-full items-center xl:flex">
            <div
              className="h-[2px] w-[163.064px]"
              style={{
                background: "linear-gradient(90deg, #FFF 0%, #01C705 100%)",
              }}
            />
          </div>
          <div
            className="w-[2px] h-[40px] lg:h-[60px] mx-auto mt-2 flex xl:hidden"
            style={{ background: 'linear-gradient(180deg, #F8F8F8 0%, #01C705 100%)' }}
          />

          {/* Right tiles (overlap for md+, grid for mobile) */}
          <div className="w-full">
            <div className="flex mt-2 md:mt-8 xl:mt-auto -space-x-11 justify-center md:justify-start md:-space-x-4 xl:-space-x-12">
              {tiles.map((t, i) => (
                <ParallelogramTile
                  key={i}
                  src={t.src}
                  alt={`Digit ${t.digit} stylized on a Moto tile`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

