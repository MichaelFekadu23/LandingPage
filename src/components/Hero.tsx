import { useEffect, useRef, useState } from "react";
import GetTheAppButton from "./GetTheAppButton";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoadedData = async () => {
      // 1) Capture first frame to use as poster
      try {
        // Pause so the poster can be visible first
        v.pause();

        // Ensure we have dimensions
        if (v.videoWidth && v.videoHeight) {
          const canvas = document.createElement("canvas");
          canvas.width = v.videoWidth;
          canvas.height = v.videoHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/jpeg");
            // Set as poster (shows until video actually plays)
            v.setAttribute("poster", dataUrl);
          }
        }

        // 2) Try to autoplay (muted + playsInline should allow it)
        try {
          await v.play();
        } catch {
          // Autoplay blocked — leave poster visible and wait for user gesture
          // (Optionally add a custom play button overlay that calls v.play())
        }
      } catch {
        // If anything fails, just attempt to play normally
        try { await v.play(); } catch {}
      }
    };

    const onPlaying = () => setIsPlaying(true);

    v.addEventListener("loadeddata", onLoadedData);
    v.addEventListener("playing", onPlaying);
    return () => {
      v.removeEventListener("loadeddata", onLoadedData);
      v.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F8F8]">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-700 ${isPlaying ? "opacity-100" : "opacity-0"}`}
          src="/assets/videos/Moto-video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* gradient overlay for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.22),rgba(0,0,0,0.22))]" />
      </div>

      {/* Text overlay */}
      <div
        className="
          relative mx-auto flex w-full items-center
          min-h-[55svh] sm:min-h-[60svh] xl:min-h-[75svh]
          px-4 sm:px-6 xl:px-36
          pt-[8vh] sm:pt-[10vh] xl:pt-[12vh]
        "
      >
        <div className="mx-auto max-w-[32rem] text-center md:mx-0 md:text-left">
          <h1 className="text-white text-[30px] sm:text-[36px] xl:text-[58px] font-nexabold leading-tight drop-shadow-md">
            Ride for Less
          </h1>

        <p className="mt-3 font-nexa text-white/70 text-[16px] sm:text-[18px] xl:text-[24px] leading-[150%] drop-shadow-sm md:max-w-[378px] mx-auto md:mx-0">
            Ride instantly, negotiate fares, or let Moto’s smart bidding find your best deal
          </p>

          <div className="flex justify-center md:justify-start">
            <GetTheAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
