export default function Tiles() {
  const cards = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/26f6b3fa318e41d408f088f2f92094231c618d18?width=374",
      number: "8",
      alt: "Luxury sedan car",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/095c34247f31caf2e71d38c4766c1c0009991d21?width=374",
      number: "7",
      alt: "Carbon fiber texture car",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e7127e33fcf51e86ef84b1b278e9588df8ef1622?width=374",
      number: "7",
      alt: "Dark luxury car",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/71352fa59b77a8e573ed373446bd693df3471237?width=374",
      number: "8",
      alt: "Green luxury car",
    },
  ];

  const Card = ({ src, alt, number }: { src: string; alt: string; number: string }) => (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 overflow-hidden rounded-[6.707px]"
        style={{
          clipPath: "polygon(31.4% 0%, 100% 0%, 68.6% 100%, 0% 100%)",
        }}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[6.7px]" />
      </div>

      <div className="absolute inset-0 flex items-end justify-center pb-[20%] sm:pb-[18%] md:pb-[16%]">
        <span
          className="select-none font-normal leading-none text-white
                     text-[min(16vw,60px)] sm:text-[min(10vw,60px)]
                     md:text-[min(8vw,60px)] lg:text-[60px]"
          style={{
            fontFamily: "Nexa, system-ui, -apple-system, sans-serif",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {number}
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-900 via-neutral-900 to-black p-4 sm:p-8">
      <div className="w-full max-w-7xl">
        {/* Desktop/Tablet overlapped row */}
        <div className="hidden md:flex md:justify-center">
          <div className="flex -space-x-10 lg:-space-x-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className="h-[220px] w-[160px] lg:h-[251px] lg:w-[187px]"
              >
                <Card src={card.image} alt={card.alt} number={card.number} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile grid (unchanged pattern, slightly tuned gaps) */}
        <div className="md:hidden mx-auto grid max-w-md grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <div key={index} className="w-full aspect-[187/251]">
              <Card src={card.image} alt={card.alt} number={card.number} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
