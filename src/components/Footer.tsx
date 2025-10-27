// src/components/Footer.tsx
import React from "react";

type FooterProps = {
  logoSrc?: string;           // full logo (incl. MOTO wordmark)
  emailIconSrc?: string;
  phoneIconSrc?: string;
  pinIconSrc?: string;
  fbIconSrc?: string;
  twIconSrc?: string;
  inIconSrc?: string;
};

export default function Footer({
  logoSrc = "/assets/logo-footer.svg",
  emailIconSrc = "/assets/icons/email.svg",
  phoneIconSrc = "/assets/icons/phone.svg",
  pinIconSrc = "/assets/icons/pin.svg",
  fbIconSrc = "/assets/icons/fb.svg",
  twIconSrc = "/assets/icons/tw.svg",
  inIconSrc = "/assets/icons/in.svg",
}: FooterProps) {
  return (
    <footer className="bg-white text-[rgba(26,26,26,0.9)]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        {/* Top rule */}
        <hr className="border-1 border-[rgba(224,224,224,1)]" />

        {/* Row: logo, nav, social */}
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-9">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <img
              src={logoSrc}
              alt="MOTO"
              className="h-7 w-auto sm:h-8 md:h-9"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Nav links */}
          <nav className="font-poppins flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(10,10,10,1)]">
            <a href="#become-a-driver" className="hover:text-[#01C705]">Become a driver</a>
            <a href="#services" className="hover:text-[#01C705]">Services</a>
            <a href="#why-choose-us" className="hover:text-[#01C705]">Why choose us</a>
          </nav>

          {/* Social pill */}
          <div className="mx-auto flex items-center gap-3 rounded-xl border border-[rgba(224,224,224,1)] px-3 py-2 sm:px-4 sm:py-3 md:mx-0">
            <span className="px-2 font-poppins text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(10,10,10,1)]">
              Stay Connected
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="#fb" className="grid h-7 w-7 place-items-center rounded hover:bg-[#01C705]/10 sm:h-8 sm:w-8" aria-label="Facebook">
                <img
                  src={fbIconSrc}
                  alt=""
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a href="#tw" className="grid h-7 w-7 place-items-center rounded hover:bg-[#01C705]/10 sm:h-8 sm:w-8" aria-label="Twitter">
                <img
                  src={twIconSrc}
                  alt=""
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a href="#in" className="grid h-7 w-7 place-items-center rounded hover:bg-[#01C705]/10 sm:h-8 sm:w-8" aria-label="LinkedIn">
                <img
                  src={inIconSrc}
                  alt=""
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-1 border-[rgba(224,224,224,1)]" />

        {/* Bottom row: contact + copyright */}
        <div className="flex flex-col gap-5 py-8 font-poppins text-[14px] sm:text-[15px] md:flex-row md:items-center md:justify-between md:py-10 md:text-[16px]">
          {/* Contact items */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 md:justify-start md:gap-x-10">
            <div className="flex items-center gap-2">
              <img
                src={emailIconSrc}
                alt=""
                className="h-4 w-4 sm:h-5 sm:w-5"
                loading="lazy"
                decoding="async"
              />
              <a href="mailto:hello@motoride.com" className="hover:text-[#01C705]">
                hello@motoride.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={phoneIconSrc}
                alt=""
                className="h-4 w-4 sm:h-5 sm:w-5"
                loading="lazy"
                decoding="async"
              />
              <a href="tel:+441111111111" className="hover:text-[#01C705]">
                +44 11111 11 1111
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={pinIconSrc}
                alt=""
                className="h-4 w-4 sm:h-5 sm:w-5"
                loading="lazy"
                decoding="async"
              />
              <span>Somewhere in the World</span>
            </div>
          </div>

          {/* Copyright */}
          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-poppins text-[rgba(152,152,154,1)] text-center md:text-left">
            © {new Date().getFullYear()} MOTO. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
