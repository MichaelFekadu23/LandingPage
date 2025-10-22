export default function Tiles() {
  const cards = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/26f6b3fa318e41d408f088f2f92094231c618d18?width=374",
      number: "8",
      alt: "Luxury sedan car"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/095c34247f31caf2e71d38c4766c1c0009991d21?width=374",
      number: "7",
      alt: "Carbon fiber texture car"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e7127e33fcf51e86ef84b1b278e9588df8ef1622?width=374",
      number: "7",
      alt: "Dark luxury car"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/71352fa59b77a8e573ed373446bd693df3471237?width=374",
      number: "8",
      alt: "Green luxury car"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-neutral-900 to-black p-4 sm:p-8">
      <div className="w-full max-w-7xl">
        <div className="hidden md:block">
          <div className="relative mx-auto" style={{ width: '600px', height: '251px' }}>
            {cards.map((card, index) => {
              const positions = [0, 138, 275, 413];
              
              return (
                <div 
                  key={index}
                  className="absolute"
                  style={{
                    left: `${positions[index]}px`,
                    top: 0,
                    width: '187px',
                    height: '251px',
                  }}
                >
                  <div className="relative w-full h-full">
                    <div 
                      className="absolute inset-0 overflow-hidden rounded-[6.707px]"
                      style={{
                        clipPath: 'polygon(31.4% 0%, 100% 0%, 68.6% 100%, 0% 100%)',
                      }}
                    >
                      <img 
                        src={card.image} 
                        alt={card.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[6.7px]" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-end justify-center" style={{ paddingBottom: '60px' }}>
                      <span 
                        className="text-white leading-none font-normal select-none"
                        style={{ 
                          fontFamily: 'Nexa, system-ui, -apple-system, sans-serif',
                          fontSize: '60px',
                          textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                        }}
                      >
                        {card.number}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="w-full aspect-[187/251]"
            >
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 overflow-hidden rounded-[6.707px]"
                  style={{
                    clipPath: 'polygon(31.4% 0%, 100% 0%, 68.6% 100%, 0% 100%)',
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[6.7px]" />
                </div>
                
                <div className="absolute inset-0 flex items-end justify-center pb-[20%]">
                  <span 
                    className="text-white leading-none font-normal select-none text-[min(15vw,60px)]"
                    style={{ 
                      fontFamily: 'Nexa, system-ui, -apple-system, sans-serif',
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    {card.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
