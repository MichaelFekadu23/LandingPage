import React from 'react';
import { PhoneMock } from './PhoneMock';
import { Step, StepItem } from './StepItem';

interface Props {
  steps?: Step[];
}

const Connector: React.FC = () => (
  <div className="mb-14 w-24 lg:w-[109px] h-[2px]" style={{
    background: 'linear-gradient(90deg, #F8F8F8 0%, #01C705 100%)'
  }}/>
);



const defaultSteps: Step[] = [
  { labelTop: "Flag", labelBottom: "Down", iconSrc: "src/assets/flag-down.svg" },
  { labelTop: "Scan QR", labelBottom: "Code", iconSrc: "src/assets/scan-qr.svg" },
  { labelTop: "Swipe to", labelBottom: "Start Ride", iconSrc: "src/assets/swipe.svg" },
  { labelTop: "Go", iconSrc: "src/assets/go.svg" },
];

export const MotoStreetPickupSection: React.FC<Props & { phoneSvgSrc?: string; phoneSvgNode?: React.ReactNode }> = ({ steps = defaultSteps, phoneSvgSrc, phoneSvgNode }) => {
  return (
    <section className="relative w-full max-w-8xl py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[3fr,1fr] lg:gap-16">
        {/* Left: tagline, title, steps */}
        <div>
          <p className="text-2xl text-[#01C705] font-nexa font-semibold">
            <span className="mr-2 font-sans">//</span>No App. No Problem. Just Scan and Go.
          </p>
          <h2 className="mt-3 text-[clamp(24px,4vw,40px)] font-nexabold text-[rgba(26,26,26,0.92)]">
            Moto Street Pickup
          </h2>

          {/* steps row */}
          <div className="md:mt-14 mt-10 flex flex-wrap items-center gap-6 md:gap-4 lg:gap-6">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <StepItem {...s} />
                {i < steps.length - 1 && <Connector />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: phone mock (single SVG) */}
        <div className="md:justify-self-end">
          <PhoneMock src={phoneSvgSrc} node={phoneSvgNode} />
        </div>
      </div>

      {/* light background underline to match screenshot spacing */}
      <div className="h-[40px] w-[283px] absolute bottom-12 right-10" style={{
        background: '#FFF',
        filter: 'blur(10px)'
      }}/>
    </section>
  );
};
