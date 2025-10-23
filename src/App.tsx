import React from "react";
import HowMotoWorks from "./components/HowMotoWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToOrder from "./components/CallToOrder";
import SafetySection from "./components/SafetySection";
import DriverValueThirty from "./components/DriverValueThrity";
import CityAppSection from "./components/CityAppSection";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import GradientBridge from "./components/GradientBridge";
import HeadlineWrapper from "./components/HeadlineWrapper";
import HowItWorks from "./components/HowItWorks";
import { MotoStreetPickupSection } from "./components/MotoStreetPickupSection";


export default function App() {
  return (
    <main className="min-h-screen w-full bg-[#0F1115] text-white antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <GradientBridge />
      <section className="relative w-full bg-[#F8F8F8] text-[#121417]">      
        <HeadlineWrapper />
        <div className="mx-auto w-full max-w-[1400px] px-5 mt-10">
          <div className="flex justify-center">
            <button
              className="rounded-[40px] text-[rgba(26,26,26,0.90)] font-nexa text-[16px] md:text-[18px] xl:text-[20px] px-6 md:px-9 py-3 md:py-4 font-bold"
              style={{ border: "1px solid rgba(0, 0, 0, 0.80)" }}
            >
              HOW MOTO WORKS
            </button>
          </div>

          <HowItWorks />
          <MotoStreetPickupSection phoneSvgSrc="/assets/phone-content.svg"/>
        </div>
      </section>
        <HowMotoWorks />
        <WhyChooseUs />
        <CallToOrder />
        <SafetySection />
        <DriverValueThirty />
        <CityAppSection />
        <Footer />
    </main>
  );
}
