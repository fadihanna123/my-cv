import React, { useEffect, useState } from "react";
import Image from "next/image";

const Carousel: React.FC<{ images: string[] }> = ({
  images,
}: {
  images: string[];
}) => {
  const [index, setIndex] = useState<number>(0);

  const showPrevImage = () => {
    setIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    setInterval(() => {
      setIndex((index) => {
        if (index === images.length - 1) return 0;
        return index + 1;
      });
    }, 3000);
  }, [images.length]);

  return (
    <div className="carouselContainer h-[500px] w-full max-w-[1200px] transition-transform">
      <div className="relative size-full">
        <Image
          alt="CarouselImage"
          src={images[index]}
          className="block size-full"
        />
        <button
          onClick={showPrevImage}
          className="carouselBtn absolute inset-y-0 left-0 block cursor-pointer p-4"
        >
          <i className="fa-solid fa-left-long w-8 fill-black stroke-white"></i>
        </button>
        <button
          onClick={showNextImage}
          className="carouselBtn absolute inset-y-0 right-0 block cursor-pointer p-4"
        >
          <i className="fa-solid fa-right-long w-8 fill-black stroke-white"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
