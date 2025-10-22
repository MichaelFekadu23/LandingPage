import GetTheAppButton from "./GetTheAppButton";

// src/components/CityAppSection.tsx
export default function CityAppSection() {
  return (
    <section className="relative bg-white flex justify-center items-center overflow-hidden pb-16">
      {/* background image */}
      <img
        src="/src/assets/images/city-map.svg" // <-- replace with your SVG path
        alt="Moto city background"
        // className="w-full h-[680px] object-cover"
      />

      {/* overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <p className="max-w-3xl mb-5 text-[28px] md:text-[36px] font-nexa text-[rgba(26,26,26,0.9)] leading-[140%]">
          <span className="text-[rgba(1,199,5,1)] ">Moto</span> offers the
          speed of instant rides, the control of negotiation, and the savings of
          bidding—all in one app.
        </p>

        <GetTheAppButton />
      </div>
    </section>
  );
}
