import { useEffect, useRef, useState } from "react";
import GetTheAppButton from "./GetTheAppButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
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

    const tryPlay = () => {
      video.play().catch(() => {
        /* autoplay may be blocked; user interaction will trigger playback */
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
      return;
    }

    video.addEventListener("canplay", tryPlay, { once: true });
    video.load();

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, [shouldLoadVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#F8F8F8] text-[#121417] dark:bg-charcoal-900 dark:text-white"
    >
      {/* Media layer */}
      <div className="absolute inset-0">
        {/* Background video */}
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload={shouldLoadVideo ? "metadata" : "none"}
          poster="/assets/images/hero.png"
          style={{ zIndex: 1 }}
        >
          {shouldLoadVideo ? (
            <source src="/assets/videos/Moto-video-1.mp4" type="video/mp4" />
          ) : null}
        </video>

        {/* gradient overlay for text readability (above video, below text) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.12),rgba(0,0,0,0.12))] dark:bg-[linear-gradient(0deg,rgba(0,0,0,0.32),rgba(0,0,0,0.32))]"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Text overlay */}
      <div
        className="
          relative mx-auto flex w-full items-center
          min-h-[55svh] sm:min-h-[60svh] xl:min-h-[75svh]
          px-4 sm:px-6 xl:px-24 2xl:px-36
          pt-[8vh] md:pt-[0vh] 2xl:pt-[12vh]
        "
      >
        <div className="mx-auto max-w-[32rem] text-center md:mx-0 md:text-left">
          <h1 className="text-[30px] sm:text-[36px] xl:text-[58px] font-nexabold leading-tight drop-shadow-md text-[#121417] dark:text-white">
            Ride for Less
          </h1>

          <p className="mt-3 font-nexa text-[rgba(26,26,26,0.75)] text-[16px] sm:text-[18px] xl:text-[24px] leading-[150%] drop-shadow-sm md:max-w-[378px] mx-auto md:mx-0 dark:text-white/70">
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
