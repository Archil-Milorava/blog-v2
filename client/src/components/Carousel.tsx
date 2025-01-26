import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = {
  imageOne:
    "https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageTwo:
    "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageThree:
    "https://images.unsplash.com/photo-1614683574679-beee9c2ab699?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div
      className="embla mt-4 w-full h-auto cursor-pointer hidden sm:block"
      ref={emblaRef}
    >
      <div className="embla__container  w-full max-w-full h-[25rem]">
        <div className="embla__slide w-full h-full max-w-full max-h-full flex items-center justify-center ">
          <img
            src={images.imageOne}
            alt="sdf"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="embla__slide w-full h-full max-w-full max-h-full flex items-center justify-center">
          <img
            src={images.imageTwo}
            alt="sdf"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="embla__slide w-full h-full max-w-full max-h-full flex items-center justify-center">
          <img
            src={images.imageThree}
            alt="sdf"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
