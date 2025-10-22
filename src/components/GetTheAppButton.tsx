export default function GetTheAppButton() {
  return (
    <button
      className="
        mt-6 sm:mt-8 
        flex items-center justify-center gap-2 sm:gap-3 
        rounded-full bg-[#01C705] 
        px-6 py-2 sm:px-10 sm:py-3 xl:px-14 
        text-[18px] sm:text-[22px] xl:text-[30px] 
        font-freight font-semibold text-white 
        shadow-[0_6px_14px_rgba(20,224,62,0.35)] sm:shadow-[0_8px_18px_rgba(20,224,62,0.35)] xl:shadow-[0_10px_22px_rgba(20,224,62,0.35)] 
        transition hover:brightness-95 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14E03E] focus:ring-offset-transparent
      "
    >
      <span className="mb-0.5 sm:mb-1">Get The App</span>
      <svg
        className="h-4 w-4 sm:h-5 sm:w-5 lg:h-[22px] lg:w-[23px]"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6657 1.59499C22.6706 0.773464 21.9974 0.105394 21.1622 0.10281L7.55092 0.0607127C6.71566 0.0581293 6.03459 0.722012 6.0297 1.54354C6.02481 2.36506 6.69796 3.03313 7.53321 3.03572L19.6321 3.07313L19.5613 14.9731C19.5564 15.7947 20.2296 16.4627 21.0648 16.4653C21.9001 16.4679 22.5811 15.804 22.586 14.9825L22.6657 1.59499ZM1.84668 20.4097L2.90982 21.4649L22.2165 2.64544L21.1533 1.59031L20.0902 0.535182L0.783536 19.3546L1.84668 20.4097Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
