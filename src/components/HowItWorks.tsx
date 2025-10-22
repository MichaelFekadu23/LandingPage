import HowCard from "./HowCard";

export default function HowItWorks() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      <HowCard
        step={1}
        title="Enter Your Ride Details"
        bullets={[
          "Open Your App",
          "Set your pickup and destination.",
          "Customize ride preferences—quiet, chatty, or special requests.",
        ]}
      />
      <HowCard
        step={2}
        title="Choose Your Fare Option"
        bullets={[
          "Automatic Bidding: Drivers bid in real time. Moto’s smart bidding system selects the lowest offer.",
          "Flex Fare: Name your price and negotiate directly with drivers. Accept, counter, or decline offers.",
          "Instant Fare: Get a driver right away at a set price—perfect when you’re in a hurry.",
        ]}
      />
      <HowCard
        step={3}
        title="Enjoy Your Trip"
        bullets={[
          "Track your driver, hop in, and relax.",
          "Pay with cash, card, or Telebirr when available.",
          "Rate your experience and earn rewards.",
        ]}
      />
    </div>
  );
}