// src/components/CallToOrder.tsx
import React from "react";

function ParallelogramTile({ src }: { src: string }) {
  return (
    <div
      className="
        relative shrink-0
        w-32 sm:w-40 md:w-44 lg:w-[186.887px]
        aspect-[187/251]
      "
    >
      <img src={src} className="h-full w-full object-cover" alt="" />
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
        <div className="grid items-center 2xl:gap-8 lg:grid-cols-[2fr_auto] xl:grid-cols-[1fr_auto_1fr]">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Badge with glow */}
              <div
                className="mt-1 rounded-lg px-2 py-2 shadow-md sm:mt-2"
                style={{ boxShadow: "0 3px 10px 1px #01C705" }}
              >
                <img
                  src={phoneBadgeSrc}
                  alt="Phone"
                  // className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:"
                />
              </div>

              <div className="flex flex-col justify-between font-nexa text-[#01C705] leading-[150%]
                               text-[18px] md:text-[22px] lg:text-[24px] 2xl:text-[28px]">
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
          <div className="relative hidden h-[1px] w-full items-center lg:flex">
            <div
              className="h-[2px] w-[163.064px]"
              style={{
                background: "linear-gradient(90deg, #FFF 0%, #01C705 100%)",
              }}
            />
          </div>

          {/* Right tiles (overlap for md+, grid for mobile) */}
          <div className="w-full">
            {/* Mobile: simple 2-col grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
              {tiles.map((t, i) => (
                <ParallelogramTile key={i} src={t.src} />
              ))}
            </div>

            {/* Tablet/Desktop: overlapped row */}
            <div className="hidden md:flex md:justify-start md:-space-x-10 lg:-space-x-12">
              {tiles.map((t, i) => (
                <ParallelogramTile key={i} src={t.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

