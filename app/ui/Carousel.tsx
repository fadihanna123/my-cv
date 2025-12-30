import React, { useEffect, useState } from "react";
import Image from "next/image";

// Functions
import { showNextImage, showPrevImage } from "@app/functions";

const Carousel: React.FC<{ images: string[] }> = ({
  images,
}: {
  images: string[];
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => {
        if (index === images.length - 1) return 0;
        return index + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="aspect-10/6 duration-300 mx-auto my-0 h-[500px] w-full max-w-[1200px] transition-transform m-2 p-2">
      <div className="relative size-full">
        <Image
          alt="CarouselImage"
          src={images[index]}
          className="block size-full"
          width={0}
          height={0}
          priority
          loading="lazy"
        />
        <button
          aria-label="Previous image"
          onClick={() => showPrevImage(setIndex, images)}
          className="transition-[background-color] duration-100 ease-[ease-in-out] hover:bg-[rgb(0,0,0,20%)] hover:transition-all hover:duration-300 absolute inset-y-0 left-0 block cursor-pointer p-4"
        >
          <i className="fa-solid fa-left-long w-8 fill-black stroke-white"></i>
        </button>
        <button
          aria-label="Next image"
          onClick={() => showNextImage(setIndex, images)}
          className="transition-[background-color] duration-100 ease-[ease-in-out] hover:bg-[rgb(0,0,0,20%)] hover:transition-all hover:duration-300 absolute inset-y-0 right-0 block cursor-pointer p-4"
        >
          <i className="fa-solid fa-right-long w-8 fill-black stroke-white"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
