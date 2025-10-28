// src/components/SafetySection.tsx

type Feature = {
  iconSrc?: string;
  title: string;
  description: string;
};

type SafetySectionProps = {
  imageSrc?: string;
  features?: Feature[];
};

const defaultFeatures: Feature[] = [
  {
    title: "Vehicle Safety Inspections",
    description:
      "All vehicles are inspected regularly to meet high safety standards, ensuring a safe and comfortable ride every time.",
    iconSrc: "/assets/icons/vehicle-safety.svg",
  },
  {
    title: "Contactless Payment Options",
    description:
      "Opt for contactless payments to minimize physical interaction and make every transaction safe and seamless.",
    iconSrc: "/assets/icons/payment.svg",
  },
  {
    title: "Vetted and Trained Drivers",
    description:
      "All drivers undergo background checks to ensure they meet our safety standards, giving you peace of mind from Pickup to Drop-off.",
    iconSrc: "/assets/icons/driver.svg",
  },
];

export default function SafetySection({
  imageSrc = "/assets/images/safety.svg",
  features = defaultFeatures,
}: SafetySectionProps) {
  return (
    <section className="bg-[#F8F8F8] dark:bg-charcoal-900">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 md:py-16 lg:px-12">
        {/* Grid layout: 1-col mobile, 2-col md+ */}
        <div className="grid items-center gap-10 sm:gap-14 lg:gap-24 xl:gap-40 md:grid-cols-2">
          {/* Left: Text & Features */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 text-[#121417] dark:text-white">
            <h2 className="font-nexabold leading-[130%] text-[rgba(26,26,26,0.9)]
                           text-2xl sm:text-3xl xl:text-[36px] dark:text-white">
              Let’s talk about{" "}
              <span className="text-[rgba(1,199,5,1)]">SAFETY</span>
            </h2>

            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5">
                  {/* Icon (responsive size only) */}
                  <div className="shrink-0">
                    <img
                      src={f.iconSrc}
                      alt={f.title}
                      // className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Text (font sizes only; style/color unchanged) */}
                  <div>
                    <h3 className="font-nexabold text-[rgba(26,26,26,0.9)]
                                   text-[18px] sm:text-[20px] md:text-[24px] dark:text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 font-nexa leading-relaxed text-[rgba(26,26,26,0.65)]
                                  text-[15px] sm:text-[16px] md:text-[16px] dark:text-white/70">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image (responsive sizing only) */}
          <div className="flex justify-center md:justify-center">
            <img
              src={imageSrc}
              alt="Smiling driver"
              // className="h-auto w-full max-w-[520px] sm:max-w-[600px] md:max-w-[640px] lg:max-w-[720px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
