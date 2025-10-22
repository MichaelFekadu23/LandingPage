import { useEffect, useRef, useState } from "react";
import GetTheAppButton from "./GetTheAppButton";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [overlaySrc, setOverlaySrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let cancelled = false;

    const captureFirstFrame = async () => {
      // Wait until we have dimensions and can draw a frame
      if (v.readyState < 2) {
        await new Promise<void>((res) =>
          v.addEventListener("loadeddata", () => res(), { once: true })
        );
      }

      // Seek to time 0 to ensure a deterministic first frame (Safari reliability)
      try {
        v.currentTime = 0;
        await new Promise<void>((res) =>
          v.addEventListener("seeked", () => res(), { once: true })
        );
      } catch {
        /* ignore seek errors and try to draw anyway */
      }

      if (cancelled || !v.videoWidth || !v.videoHeight) return;

      const canvas = document.createElement("canvas");
      canvas.width = v.videoWidth;
      canvas.height = v.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      try {
        ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg");
        if (!cancelled) setOverlaySrc(dataUrl);
      } catch {
        // If the canvas is tainted (cross-origin), we just skip the overlay
      }
    };

    captureFirstFrame().then(async () => {
      // Try to autoplay
      try {
        await v.play();
      } catch {
        // Autoplay blocked. Keep overlay visible until user interacts.
        // You can add a custom play button overlay that calls v.play()
      }
    });

    const onPlaying = () => setIsPlaying(true);
    v.addEventListener("playing", onPlaying);

    return () => {
      cancelled = true;
      v.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F8F8]">
      {/* Media layer */}
      <div className="absolute inset-0">
        {/* First-frame overlay (sits above video until it starts) */}
        {overlaySrc && (
          <img
            src={overlaySrc}
            alt="Video preview"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 pointer-events-none ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
            style={{ zIndex: 2 }}
          />
        )}

        {/* Background video */}
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/assets/videos/Moto-video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // keep the video below the overlay
          style={{ zIndex: 1 }}
        />

        {/* gradient overlay for text readability (above video, below text) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.22),rgba(0,0,0,0.22))]"
          style={{ zIndex: 1 }}
        />
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
