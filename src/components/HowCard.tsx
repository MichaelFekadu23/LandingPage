export default function HowCard({
  step,
  title,
  bullets,
}: {
  step: number;
  title: string;
  bullets: string[];
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-5 shadow-[0_8px_40px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-6 lg:rounded-[30px] lg:p-8 dark:bg-charcoal-800 dark:shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
      {/* SVG border – responsive inset wrapper so it fits at every size */}
      <div className="pointer-events-none absolute inset-2 sm:inset-3 lg:inset-4">
        <svg className="h-full w-full" viewBox="0 0 405 671" preserveAspectRatio="none">
          <path
            d="
              M1.00127 31
              L1.00127 337.508
              L1.00011 640
              C1.00005 656.568 14.4315 670 31.0001 670
              L374 670
              C390.569 670 404 656.569 404 640
              L404 30.9999
              C404 14.4314 390.569 0.999921 374 0.999921
              L31.0013 0.999938
              C14.4327 0.999938 1.00127 14.4315 1.00127 31
            "
            fill="none"
            stroke="#01C705"
            strokeWidth="0.5"
            strokeDasharray="8 8"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* IMAGE */}
      <div className="mx-auto w-full">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] bg-[#F7F7F7] sm:aspect-square sm:rounded-[26px] lg:rounded-[30px] dark:bg-charcoal-900">
          <img
            src="/assets/how-moto-works.svg"
            alt="Illustration showing how Moto works"
            className="object-cover w-[75%] h-[85%] md:w-auto md:h-auto rounded-[20px] md:rounded-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* STEP BADGE */}
      <div
        className="mt-5 inline-flex w-max items-center rounded-[12px] bg-[#2F2F2F] px-3 py-1.5 text-xs text-white shadow-[0_3px_10px_1px_#01C705] sm:mt-6 sm:rounded-[14px] sm:px-4 sm:py-2 sm:text-sm lg:rounded-[15px] dark:bg-[#0F1115]"
      >
        Step {step}
      </div>

      {/* TEXT */}
      <h4 className="mt-5 text-lg font-inter font-semibold text-[rgba(26,26,26,0.9)] sm:mt-6 sm:text-xl lg:mt-7 lg:text-2xl dark:text-white">
        {title}
      </h4>

      <ul className="mt-3 space-y-3 font-normalInter text-[13px] text-[#2C2F35]/80 sm:text-[15px] dark:text-white/70">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="relative top-[8px] sm:top-[9px]">
              <span className="block h-[5px] w-[5px] rounded-full bg-[rgba(26,26,26,0.65)] sm:h-[6px] sm:w-[6px] dark:bg-white/70" />
            </span>
            <span className="leading-relaxed font-inter text-[14px] font-[500] text-[rgba(26,26,26,0.65)] dark:text-white/70">{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
