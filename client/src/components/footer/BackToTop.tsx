const BackToTop = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
      <button
        className="bg-[#B7B8B9] mt-4 sm:w-[24rem] w-full h-[2rem] text-xs font-extrabold tracking-wider uppercase cursor-pointer"
        onClick={scrollToTop}
      >
        back to top
      </button>
    );
  };
  
  export default BackToTop;
  