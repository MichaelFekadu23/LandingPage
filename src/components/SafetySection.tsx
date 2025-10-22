// src/components/SafetySection.tsx

type Feature = {
  iconSrc?: string; // replace with your SVG path
  title: string;
  description: string;
};

type SafetySectionProps = {
  imageSrc?: string; // replace with your SVG/PNG
  features?: Feature[];
};

const defaultFeatures: Feature[] = [
  {
    title: "Vehicle Safety Inspections",
    description:
      "All vehicles are inspected regularly to meet high safety standards, ensuring a safe and comfortable ride every time.",
    iconSrc: "/src/assets/icons/vehicle-safety.svg",
  },
  {
    title: "Contactless Payment Options",
    description:
      "Opt for contactless payments to minimize physical interaction and make every transaction safe and seamless.",
    iconSrc: "/src/assets/icons/payment.svg",
  },
  {
    title: "Vetted and Trained Drivers",
    description:
      "All drivers undergo background checks to ensure they meet our safety standards, giving you peace of mind from Pickup to Drop-off.",
    iconSrc: "/src/assets/icons/driver.svg",
  },
];

export default function SafetySection({
  imageSrc = "/src/assets/images/safety.svg",
  features = defaultFeatures,
}: SafetySectionProps) {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-12">
        {/* Grid layout with text left, image right */}
        <div className="grid items-center gap-40 md:grid-cols-2">
          {/* Left: Text & Features */}
          <div className="space-y-8">
            <h2 className="font-nexabold text-3xl md:text-[36px] leading-[130%] text-[rgba(26,26,26,0.9)]">
              Let’s talk about{" "}
              <span className="text-[rgba(1,199,5,1)]">SAFETY</span>
            </h2>

            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-center">
                  {/* Icon */}
                  <div>
                      <img
                        src={f.iconSrc}
                        alt={f.title}
                      />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[20px] md:text-[24px] font-nexabold text-[rgba(26,26,26,0.9)]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[16px] font-nexa leading-relaxed text-[rgba(26,26,26,0.65)]">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-end md:justify-center">
            <div>
              <img
                src={imageSrc}
                alt="Smiling driver"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
