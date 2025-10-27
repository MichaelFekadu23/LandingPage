export default function Tiles() {
  const cards = [
    {
      image: "/assets/tiles/tile1.png",
      number: "8",
      alt: "Digit eight rendered on a green parallelogram tile",
    },
    {
      image: "/assets/tiles/tile2.png",
      number: "7",
      alt: "Digit seven rendered on a dark parallelogram tile",
    },
    {
      image: "/assets/tiles/tile3.png",
      number: "7",
      alt: "Digit seven rendered on a gold parallelogram tile",
    },
    {
      image: "/assets/tiles/tile4.png",
      number: "8",
      alt: "Digit eight rendered on a silver parallelogram tile",
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
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 187px, 45vw"
        />
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
