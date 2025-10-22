// src/components/HowMotoWorks.tsx
import React from "react";

type Step = {
  title: string;
  description: string;
  imgSrc?: string;
};


const steps: Step[] = [
  {
    imgSrc: "/assets/scan-qr-code.svg",
    title: "Scan QR Code",
    description:
      "Use your phone’s camera to scan the QR code inside any Moto car.",
  },
  {
    imgSrc: "/assets/quick-details.svg",
    title: "Quick Details",
    description:
      "Enter your name and phone number—no app needed. After your frst ride, your details are saved for even faster bookings.",
  },
  {
    imgSrc: "/assets/start-ride.svg",
    title: "Start Your Ride",
    description:
      "Tell your driver your destination and swipe to begin. The driver gets your info instantly, and your trip is securely logged.",
  },
  {
    imgSrc: "/assets/arrive.svg",
    title: "Arrive",
    description:
      "Your ride is GPS-tracked. When you arrive, pay by cash, Telebirr, or card, and receive a digital receipt right to your phone.",
  },
];

export default function HowMotoWorks({
  items = steps,
}: {
  items?: Step[];
}) {
  return (
    <section className="relative bg-white">
      <div className="max-w-10xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="rounded-[40px] border border-[rgba(10,10,10,0.30)] px-8 py-4 text-2xl font-nexa text-[rgba(26,26,26,0.9)]">
            How Moto Street Pickup Works
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2">
          {items.map(({ title, description, imgSrc }, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex flex-col gap-2 rounded-lg w-16 h-16 bg-[#F7F7F7] items-center justify-center shadow-md">
                {imgSrc ? (
                  <img src={imgSrc} alt="Step Icon" />
                ) : (
                  null
                )}
              </div>

              <h3 className="text-2xl font-nexa leading-[130%] text-[rgba(26,26,26,0.9)]">{title}</h3>
              <p className="mx-auto mt-4 max-w-[50ch] text-base font-nexa leading-[130%] text-[rgba(26,26,26,0.65)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
