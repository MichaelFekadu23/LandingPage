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
    <section className="bg-[#F8F8F8] dark:bg-[rgba(10,10,10,1)]">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 md:py-16 lg:px-12">
        {/* Grid layout: 1-col mobile, 2-col md+ */}
        <div className="grid items-center gap-10 sm:gap-14 lg:gap-24 xl:gap-40 md:grid-cols-2">
          {/* Left: Text & Features */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <h2 className="font-nexabold leading-[130%] text-[rgba(26,26,26,0.9)]
                           dark:text-white
                           text-2xl sm:text-3xl xl:text-[36px]">
              Let’s talk about{" "}
              <span className="text-[rgba(1,199,5,1)]">SAFETY</span>
            </h2>

            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5">
                  {/* Icon (responsive size only) */}
                  <div className="shrink-0 bg-white dark:bg-[rgba(35,35,35,1)] rounded-lg shadow-sm w-16 h-16 flex items-center justify-center">
                    <object
                      data={f.iconSrc}
                      type="image/svg+xml"
                      aria-label={f.title}
                      className="
                        lg:h-auto lg:w-auto sm:h-8 sm:w-8 md:h-9 md:w-9
                      "
                    />
                  </div>

                  {/* Text (font sizes only; style/color unchanged) */}
                  <div>
                    <h3 className="font-nexabold text-[rgba(26,26,26,0.9)]
                                  dark:text-white
                                   text-[18px] sm:text-[20px] md:text-[24px]">
                      {f.title}
                    </h3>
                    <p className="mt-2 font-nexa leading-relaxed text-[rgba(26,26,26,0.65)]
                                  dark:text-[rgba(255,255,255,0.5)]
                                  text-[15px] sm:text-[16px] md:text-[16px]">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
      <div
        className="
          w-full
          max-w-[min(680px,92vw)]
          md:max-w-[min(560px,46vw)]
          lg:max-w-[min(750px,42vw)]
        "
      >
        {/* Rounded clip wrapper */}
        <div className="rounded-[24px] overflow-hidden">
          {/* Auto height on mobile; aspect + height cap only on md+ */}
          <div
            className="
              relative
              h-auto
              md:aspect-[16/11]
              lg:aspect-[16/9]
              md:max-h-[520px]
              xl:max-h-[560px]
            "
          >
              <object
                data={imageSrc}
                type="image/svg+xml"
                aria-label="Smiling driver"
                className="block w-full h-auto md:absolute md:inset-0 md:h-full"
              />
           
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
  );
}
