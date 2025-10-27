import { useEffect, useRef, useState } from "react";
import GetTheAppButton from "./GetTheAppButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // controls poster fade

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => setIsPlaying(true);

    video.addEventListener("playing", onPlaying);
    const tryPlay = () => {
      video.play().catch(() => {/* user gesture needed; poster stays shown */});
    };

    if (video.readyState >= 2) tryPlay();
    else video.addEventListener("canplay", tryPlay, { once: true });

    video.load();

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", tryPlay as any);
    };
  }, [shouldLoadVideo]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#F8F8F8]">
      {/* Media layer */}
      <div className="absolute inset-0">
        {/* VIDEO (z-10) */}
        <video
          ref={videoRef}
          className="h-full w-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
          preload={shouldLoadVideo ? "metadata" : "none"}
          // keep poster attribute if you want, but we don't rely on it
          poster="/assets/images/hero.png"
        >
          {shouldLoadVideo ? (
            <source src="/assets/videos/Moto-video-1.mp4" type="video/mp4" />
          ) : null}
        </video>

        {/* POSTER IMAGE OVERLAY (z-20) — shown until video is actually playing */}
        <img
          src="/assets/images/hero.png"
          alt=""
          className={[
            "absolute inset-0 h-full w-full object-cover z-20",
            "transition-opacity duration-300",
            isPlaying ? "opacity-0 pointer-events-none select-none" : "opacity-100"
          ].join(" ")}
          decoding="async"
        />

        {/* Gradient overlay (above both poster & video, below text) (z-30) */}
        <div className="absolute inset-0 z-30 bg-[linear-gradient(0deg,rgba(0,0,0,0.22),rgba(0,0,0,0.22))]" />
      </div>

      {/* Text overlay (z-40) */}
      <div
        className="
          relative z-40 mx-auto flex w-full items-center
          min-h-[55svh] sm:min-h-[60svh] xl:min-h-[75svh]
          px-4 sm:px-6 xl:px-24 2xl:px-36
          pt-[8vh] md:pt-[0vh] 2xl:pt-[12vh]
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
