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
    <section className="relative bg-[#F8F8F8]">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] items-start gap-12">
          {/* Left: photo */}
          <div className="overflow-hidden">
            <img
              src={photoSrc}
              alt="Moto vehicle"
              className="object-cover"
            />
          </div>

          {/* Right: label + features */}
          <div>
            <div className="mb-16 flex justify-center md:justify-start">
              <span className="rounded-[40px] border border-[rgba(0,0,0,0.80)] px-8 py-4 text-base font-nexabold text-black">
          WHY CHOOSE US
              </span>
            </div>

            <ul className="space-y-10">
              {features.map((f, i) => (
              <li key={i} className="flex gap-6">
                {/* Icon badge */}
                <div >
                  <div className="rounded-lg mt-3 h-16 w-16 bg-white flex items-center justify-center shadow-sm">
                    <img
                      src={f.iconSrc}
                      alt={f.title}
                    />
                  </div>
                </div>

                {/* Copy */}
                <div className="self-start">
                  <h3 className="text-2xl font-nexa text-[rgba(26,26,26,0.9)]">
                    {f.title}
                  </h3>
                  <p className="mt-3 max-w-[62ch] font-nexa text-base leading-[150%] text-[rgba(26,26,26,0.65)]">
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
