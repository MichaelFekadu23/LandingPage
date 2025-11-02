import React from "react";

export default function WhyChooseUs() {
  const photoSrc = "/assets/car-type.svg"; // Replace with your actual image path

  const features = [
    {
      iconSrc: "/assets/tailored-vehicle.svg",
      title: "Tailored Vehicle Choices",
      description:
        "Choose from Classic, Comfort, Luxury or Minivan rides to suit any occasion or budget.",
    },
    {
      iconSrc: "/assets/three-ways.svg",
      title: "3 ways to ride, one powerful platform",
      description:
        "Select from Automatic Bidding for savings, Flex Fare for negotiation and control, or Instant Match for the fastest pick-up. Moto gives you the power to ride on your terms.",
    },
    {
      iconSrc: "/assets/bolt.svg",
      title: "Fast and convenient booking",
      description:
        "Moto leads the industry with fast booking options on WhatsApp, call-in order, and our seamless app, delivering unparalleled convenience.",
    },
    {
      iconSrc: "/assets/headset.svg",
      title: "24/7 support",
      description:
        "Support that never sleeps—here whenever, wherever you need us.",
    },
  ];

  return (
    <section className="relative bg-[#F8F8F8] dark:bg-[rgba(10,10,10,1)]">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="grid grid-cols-1 items-center 2xl:items-start justify-center gap-10 md:grid-cols-[2fr_3fr] md:gap-12 lg:gap-16">
          {/* Left: photo (image size scales only) */}
          <div className="w-full">
            <object
              data={photoSrc}
              aria-label="Moto vehicle"
              className="
                mx-auto block h-auto object-contain
                w-full max-w-[520px]
                sm:max-w-[620px]
                md:max-w-[700px]
                lg:max-w-auto
                xl:w-auto
              "
            />
          </div>

          {/* Right: label + features */}
          <div>
            <div className="mb-10 flex justify-center md:mb-16 md:justify-start">
              <span
                className="
                  rounded-[40px] border border-[rgba(0,0,0,0.80)] dark:border-[rgba(255,255,255,0.8)] px-8 py-4
                  text-sm sm:text-base md:text-lg lg:text-xl
                  font-nexabold text-black dark:text-white
                "
              >
                WHY CHOOSE US
              </span>
            </div>

            <ul className="space-y-8 sm:space-y-9 md:space-y-10">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                  {/* Icon badge (icon/image sizes only) */}
                  <div className="pt-1">
                    <div
                      className="
                        rounded-lg bg-white dark:bg-[rgba(35,35,35,1)] shadow-sm
                        flex items-center justify-center
                        h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-16 lg:w-16
                      "
                    >
                      <object
                        data={f.iconSrc}
                        aria-label={f.title}
                        type="image/svg+xml"
                      />
                    </div>
                  </div>

                  {/* Copy (font sizes only; font-style & color unchanged) */}
                  <div className="self-start">
                    <h3
                      className="
                        font-nexa text-[rgba(26,26,26,0.9)]
                        dark:text-white
                        text-lg sm:text-xl md:text-2xl lg:text-2xl
                      "
                    >
                      {f.title}
                    </h3>
                    <p
                      className="
                        mt-3 max-w-[62ch] font-nexa leading-[150%] text-[rgba(26,26,26,0.65)]
                        dark:text-[rgba(255,255,255,0.5)]
                        text-sm sm:text-[15px] md:text-base lg:text-base
                      "
                    >
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
