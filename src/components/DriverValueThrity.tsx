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
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        {/* Heading */}
        <h2 className="mx-auto max-w-4xl font-nexabold text-center text-[28px] leading-tight text-[rgba(26,26,26,0.9)] sm:text-[36px] md:text-[48px]">
          Here’s what driving with{" "}
          <span className="text-[rgba(1,199,5,1)]">Moto</span> puts in
          <br className="hidden sm:block" />
          your hands{" "}
          <span className="text-[rgba(1,199,5,1)]">in just 30 days</span>
        </h2>

        {/* Timeline */}
        <div className="relative mx-auto mt-8 w-full max-w-8xl">
          {/* Labels */}
          <div className="mb-3 flex justify-between text-[16px] text-[rgba(26,26,26,0.9)] font-normalInter">
            <span className="rounded-full border border-[rgba(187,187,187,1)] px-3 py-1" style={{
              background: 'linear-gradient(90deg, rgba(199, 196, 196, 0.733333) -22.41%, #FFFFFF 79.31%)'
            }}>
              Today
            </span>
            <span className="rounded-full border border-[rgba(187,187,187,1)] px-3 ml-3 py-1" style={{
              background: 'linear-gradient(90deg, rgba(199, 196, 196, 0.733333) -22.41%, #FFFFFF 79.31%)'
            }}>
              15 Days
            </span>
            <span className="rounded-full border border-[rgba(187,187,187,1)] -mr-2 px-3 py-1" style={{
              background: 'linear-gradient(90deg, rgba(199, 196, 196, 0.733333) -22.41%, #FFFFFF 79.31%)'
            }}>
              30 Days
            </span>
          </div>

          {/* Rail */}
          <div className="relative h-[14px] w-[97%] mx-auto mt-6">
            {/* line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 rounded-full border border-[#01C705]/60" />
            {/* markers */}
            <div className="absolute left-0 top-1/2 h-[25px] w-[25px] -translate-y-1/2 rounded-full border-2 border-[rgba(1,199,5,1)]" style={{
              background: 'linear-gradient(90deg, rgba(248, 248, 248, 0.972549) 0%, #9EEE9F 74.89%)'

            }}/>
            <div className="absolute left-1/2 top-1/2 h-[25px] w-[25px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgba(1,199,5,1)]" style={{
              background: 'linear-gradient(90deg, rgba(248, 248, 248, 0.972549) 0%, #9EEE9F 74.89%)'

            }}/>
            <div className="absolute right-0 top-1/2 h-[25px] w-[25px] -translate-y-1/2 rounded-full border-2 border-[rgba(1,199,5,1)] shadow" style={{
              background: 'linear-gradient(90deg, rgba(248, 248, 248, 0.972549) 0%, #9EEE9F 74.89%)'

            }}/>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="max-w-[100%] max-h-[296px] w-full h-full rounded-2xl border border-[#01C705]/40 bg-gradient-to-tr from-[#01C705]/5 to-transparent p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              style={{
                boxSizing: 'border-box',
                background: 'linear-gradient(90deg, rgba(248, 248, 248, 0.972549) 27.52%, rgba(191, 245, 192, 0.4) 133.14%)',
              }}
            >
              <h3 className="text-[20px] font-nexabold text-[rgba(26,26,26,0.9)]">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {c.points.map((p, j) => (
                  <li key={j} className="flex gap-3 font-nexa text-[16px] leading-relaxed text-[rgba(26,26,26,0.65)]">
                    {/* check icon placeholder (swap with your SVG) */}
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-1 h-5 w-5 shrink-0"
                      fill="none"
                      stroke="#01C705"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[rgba(1,199,5,1)] px-8 lg:px-16 2xl:px-20 py-4 text-[18px] lg:text-[26px] font-nexabold text-white shadow-[0_8px_24px_rgba(1,199,5,0.35)] transition-transform hover:scale-[1.015] active:scale-[0.99]"
          >
            Become a driver
          </a>
        </div>
      </div>
    </section>
  );
}
