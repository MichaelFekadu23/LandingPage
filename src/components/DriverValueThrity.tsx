// src/components/DriverValueThirty.tsx
import React from "react";

type Point = { text: string };
type Card = { title: string; points: Point[] };

const cards: Card[] = [
  {
    title: "Get on the road in under 30 minutes",
    points: [
      { text: "Sign up and start earning fast" },
      {
        text:
          "Choose your earning preference: commission or subscription (12hr to annual)",
      },
      {
        text:
          "Instant access to proxy bidding and multiple ride options",
      },
    ],
  },
  {
    title: "Feel the freedom",
    points: [
      { text: "Accept only the rides you want—no penalties, ever" },
      { text: "Switch plans as your goal changes" },
      { text: "Maximize your income, your way" },
    ],
  },
  {
    title: "Wonder why you ever drove anywhere else",
    points: [
      { text: "Earn more, control your schedule" },
      {
        text:
          "Build loyalty and repeat business with more ride options",
      },
      {
        text:
          "You’re not just a driver—you’re a true entrepreneur",
      },
    ],
  },
];

export default function DriverValueThirty() {
  return (
    <section className="bg-white dark:bg-[rgba(18,17,17,1)]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Heading */}
        <h2 className="mx-auto max-w-4xl font-nexabold text-center leading-tight text-[rgba(26,26,26,0.9)]
                       dark:text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
          Here’s what driving with{" "}
          <span className="text-[rgba(1,199,5,1)]">Moto</span> puts in
          <br className="hidden sm:block" />
          your hands{" "}
          <span className="text-[rgba(1,199,5,1)]">in just 30 days</span>
        </h2>

        {/* Timeline */}
        <div className="relative mx-auto mt-8 w-full max-w-8xl">
          {/* Labels aligned to the 3 markers via grid */}
            <div className="mb-3 grid grid-cols-3 items-center text-[rgba(26,26,26,0.9)]">
            <span
              className="justify-self-start rounded-full border border-[rgba(187,187,187,1)] px-2.5 py-1
                   text-[12px] sm:text-[14px] md:text-[16px] bg-gradient-to-r from-[#C7C4C4BB] to-white
                   dark:from-[#EDE5E5BB] dark:to-white
                   "
            >
              Today
            </span>
            <span
              className="justify-self-center rounded-full border border-[rgba(187,187,187,1)] px-2.5 py-1
                   text-[12px] sm:text-[14px] md:text-[16px] bg-gradient-to-r from-[#C7C4C4BB] to-white
                   dark:from-[#EDE5E5BB] dark:to-white
                   "
            >
              15 Days
            </span>
            <span
              className="justify-self-end rounded-full border border-[rgba(187,187,187,1)] px-2.5 py-1
                   text-[12px] sm:text-[14px] md:text-[16px] bg-gradient-to-r from-[#C7C4C4BB] to-white
                   dark:from-[#EDE5E5BB] dark:to-white
                   "
            >
              30 Days
            </span>
            </div>

          {/* Rail */}
          <div className="relative mx-auto mt-4 h-[14px] w-full max-w-[97%]">
            {/* line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 rounded-full border border-[#01C705]/60" />
            {/* markers */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border-2 border-[rgba(1,199,5,1)]
                         h-4 w-4 sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(248, 248, 248, 0.972549) 0%, #9EEE9F 74.89%)",
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgba(1,199,5,1)]
                         h-4 w-4 sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(248, 248, 248, 0.972549) 0%, #9EEE9F 74.89%)",
              }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border-2 border-[rgba(1,199,5,1)] shadow
                         h-4 w-4 sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(248, 248, 248, 0.972549) 0%, #9EEE9F 74.89%)",
              }}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:gap-6 md:mt-10 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              className="
                w-full relative overflow-hidden
                rounded-[24px] border border-[#01C705] dark:border-[#5F5F5F]
                p-5 sm:p-6
                bg-gradient-to-r from-[rgba(248,248,248,0.972549)] to-[rgba(191,245,192,0.32)]
                 dark:[background:linear-gradient(90deg,rgba(32,32,32,1)_0%,rgba(217,219,217,0.29)_100%)]
              "
            >
              <h3 className="font-nexabold text-[rgba(26,26,26,0.9)]
                            dark:text-white
                             text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px]">
                {c.title}
              </h3>

              <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                {c.points.map((p, j) => (
                  <li
                    key={j}
                    className="flex gap-3 font-nexa leading-relaxed text-[rgba(26,26,26,0.65)]
                              dark:text-[rgba(255,255,255,0.5)]
                               text-[14px] sm:text-[15px] md:text-[16px]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0"
                      fill="none"
                      stroke="#01C705"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[rgba(1,199,5,1)]
                       px-8 md:px-12 lg:px-16 2xl:px-20 py-3 md:py-4
                       text-[16px] md:text-[20px] lg:text-[26px]
                       font-nexabold text-white shadow-[0_8px_24px_rgba(1,199,5,0.35)]
                       transition-transform hover:scale-[1.015] active:scale-[0.99]"
          >
            Become a driver
          </a>
        </div>
      </div>
    </section>
  );
}
