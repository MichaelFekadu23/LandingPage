export default function GradientBridge() {
  return (
    <div className="relative w-full">
      <div
        className="absolute left-1/2 top-[-50px] h-[108px] w-screen -translate-x-1/2 bg-white dark:bg-emerald/20"
        style={{ filter: 'blur(40px)', zIndex: 30 }}
      />
      <div
        className="absolute left-1/2 top-[-30px] h-[108px] w-screen -translate-x-1/2 bg-white dark:bg-emerald/10"
        style={{ filter: 'blur(22px)', zIndex: 40 }}
      />
    </div>
  );
}