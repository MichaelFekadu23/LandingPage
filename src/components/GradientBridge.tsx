export default function GradientBridge() {
  return (
    <div className="relative w-full">
      {/* First blurred layer */}
      <div
        className="
          absolute w-screen h-[108px] left-1/2 -translate-x-1/2 -top-[50px]
          bg-white dark:bg-black
          blur-[40px] z-30
          transition-colors duration-300
        "
      />

      {/* Second blurred layer */}
      <div
        className="
          absolute w-screen h-[108px] left-1/2 -translate-x-1/2 -top-[30px]
          bg-white dark:bg-black
          blur-[22px] z-40
          transition-colors duration-300
        "
      />
    </div>
  );
}
