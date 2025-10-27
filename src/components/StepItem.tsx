export type Step = {
  labelTop: string;
  labelBottom?: string;
  iconSrc?: string; // optional URL to an SVG the user will provide later
  iconNode?: React.ReactNode; // alternatively pass a React node
};


const PlaceholderIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="8" fill="currentColor" opacity="0.15" />
    <path d="M14 30l6-8 5 6 5-7 4 9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StepItem: React.FC<Step> = ({ labelTop, labelBottom, iconSrc, iconNode }) => {
  return (
    <div className={`relative flex shrink-0 flex-col items-center text-center ${labelBottom ? 'mb-0' : 'mb-7'}`}>
      <div className="grid place-items-center rounded-[55px] bg-[#01C705] p-[1rem] md:p-[1.2rem] xl:p-[1.5rem]">
        <span className="">
          {iconNode ? iconNode : iconSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={iconSrc}
              alt=""
              className="h-8 w-8 md:h-10 md:w-10 xl:h-auto xl:w-auto"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <PlaceholderIcon />
          )}
        </span>
      </div>
      <div className="mt-3 font-normal text-[rgba(26,26,26,0.85)]">
        <div className="font-nexa text-[16px] md:text-[18px] xl:text-[20px]">{labelTop}</div>
        {labelBottom && <div className="font-nexa text-[16px] md:text-[18px] xl:text-[20px]">{labelBottom}</div>}
      </div>
    </div>
  );
};
