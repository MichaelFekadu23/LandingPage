import React from 'react';
import { PhoneMock } from './PhoneMock';
import { Step, StepItem } from './StepItem';
import { useTheme } from '../context/ThemeContext';

interface Props {
  steps?: Step[];
}

const Connector: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div
      className="mb-14 w-24 lg:w-[109px] h-[2px]"
      style={{
        background: isDark
          ? 'linear-gradient(90deg, #0A0A0A 0%, #01C705 100%)'
          : 'linear-gradient(90deg, #F8F8F8 0%, #01C705 100%)',
      }}
    />
  );
};

const defaultSteps: Step[] = [
  { labelTop: 'Flag', labelBottom: 'Down', iconSrc: '/assets/flag-down.svg' },
  { labelTop: 'Scan QR', labelBottom: 'Code', iconSrc: '/assets/scan-qr.svg' },
  { labelTop: 'Swipe to', labelBottom: 'Start Ride', iconSrc: '/assets/swipe.svg' },
  { labelTop: 'Go', iconSrc: '/assets/go.svg' },
];

// Vertical connector that fills its grid row height
const VerticalConnector: React.FC<{ className?: string }> = ({ className }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div
      className={['w-[2px] h-full', className].filter(Boolean).join(' ')}
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0A0A0A 0%, #01C705 100%)'
          : 'linear-gradient(180deg, #F8F8F8 0%, #01C705 100%)',
      }}
    />
  );
};

// (optional) narrower mobile horizontal connector
const MobileConnector: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div
      className="h-[2px] w-20"
      style={{
        background: isDark
          ? 'linear-gradient(90deg, #0A0A0A 0%, #01C705 100%)'
          : 'linear-gradient(90deg, #F8F8F8 0%, #01C705 100%)',
      }}
    />
  );
};

function MobileSteps({ steps }: { steps: Step[] }) {
  const [s0, s1, s2, s3] = steps;

  return (
    <div className="md:hidden mt-4 px-2">
      {/* Custom row heights -> rows 2 & 4 are tiny connector rows */}
      <div
        className="
          grid grid-cols-3 gap-x-1 gap-y-1 place-items-center
          [grid-template-rows:auto_60px_auto_60px_auto]
        "
      >
        {/* Row 1: Step 0 */}
        <div className="col-start-1 row-start-1">{s0 && <StepItem {...s0} />}</div>

        {/* Row 2: vertical 0 -> 1 */}
        <div className="col-start-1 row-start-2 w-full h-[80%] flex justify-center mb-2">
          <VerticalConnector />
        </div>

        {/* Row 3: Step 1 + Step 2 with horizontal between */}
        <div className="col-start-1 row-start-3">{s1 && <StepItem {...s1} />}</div>
        <div className="col-start-2 row-start-3 mb-12">
          <MobileConnector />
        </div>
        <div className="col-start-3 row-start-3">{s2 && <StepItem {...s2} />}</div>

        {/* Row 4: vertical 2 -> 3 */}
        <div className="col-start-3 row-start-4 w-full h-[80%] flex justify-center mb-2">
          <VerticalConnector />
        </div>

        {/* Row 5: Step 3 */}
        <div className="col-start-3 row-start-5">{s3 && <StepItem {...s3} />}</div>
      </div>
    </div>
  );
}

export const MotoStreetPickupSection: React.FC<
  Props & { phoneSvgSrc?: string; phoneSvgNode?: React.ReactNode }
> = ({ steps = defaultSteps, phoneSvgSrc, phoneSvgNode }) => {
  return (
    <section className="relative w-full max-w-8xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 overflow-x-hidden">
      <div className="grid items-center gap-10 md:grid-cols-[3fr,1fr] lg:gap-16">
        {/* Left: tagline, title, steps */}
        <div>
          <p className="text-lg md:text-xl xl:text-2xl text-[#01C705] font-nexa font-semibold">
            <span className="mr-2 font-sans">//</span>No App. No Problem. Just Scan and Go.
          </p>
          <h2 className="mt-3 text-[24px] md:text-[30px] xl:text-[40px] font-nexabold text-[rgba(26,26,26,0.92)] dark:text-white">
            Moto Street Pickup
          </h2>

          {/* Mobile design (only < md) */}
          <MobileSteps steps={steps} />

          {/* Row design for md and up */}
          <div className="hidden md:flex md:mt-14 items-center gap-6 md:gap-4 lg:gap-6">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <StepItem {...s} />
                {i < steps.length - 1 && <Connector />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: phone mock */}
        <div className="mt-8 md:mt-0 justify-self-center md:justify-self-end md:ml-auto w-full max-w-[min(380px,90vw)]">
          <PhoneMock src={phoneSvgSrc} node={phoneSvgNode} />
        </div>
      </div>

      {/* Light background underline (kept safe within viewport) */}
      <div
        className="
          pointer-events-none h-[32px] w-[min(283px,88vw)]
          absolute bottom-7 md:bottom-12 left-1/2 -translate-x-1/2
          bg-white dark:bg-black blur-[10px]
        "
      />
    </section>
  );
};
