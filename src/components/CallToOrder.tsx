function ParallelogramTile({ src }: { src: string }) {
  return (
    <div className="relative h-[251.281px] w-[186.887px] shrink-0">
      <img src={src} className="h-full w-full object-cover" />
    </div>
  );
}

export default function CallToOrder() {
  const phoneBadgeSrc = "/src/assets/phone-badge.svg";

  const tiles = [
    { src: "/src/assets/tiles/tile1.png", digit: "8" },
    { src: "/src/assets/tiles/tile2.png", digit: "7" },
    { src: "/src/assets/tiles/tile3.png", digit: "7" },
    { src: "/src/assets/tiles/tile4.png", digit: "8" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <div className="flex items-start gap-6">
              {/* Badge with glow */}
              <div
                className="px-2 py-2 shadow-md mt-2 rounded-lg"
                style={{ boxShadow: "0 3px 10px 1px #01C705" }}
              >
                <img src={phoneBadgeSrc} alt="Phone" />
              </div>

              <div>
                <h2 className="text-[28px] leading-[150%] font-nexa text-[#01C705]">
                  Low on Data? Don't Stress.
                  <br />
                  Order your ride with just a quick call.
                </h2>
              </div>
            </div>

            <div className="flex items-start">
              <p className="mt-4 text-2xl leading-[150%] text-[rgba(26,26,26,0.65)] font-nexa">
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

          {/* Right tiles */}
          <div className="flex justify-start -space-x-12">
            {tiles.map((t, i) => (
              <ParallelogramTile key={i} src={t.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
