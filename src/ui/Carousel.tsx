import { useEffect, useState } from "react";

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
    <div className="max-w-[1200px] w-[100%] h-[500px] carouselContainer transition-transform	">
      <div className="w-[100%] h-[100%] relative">
        <img src={images[index]} className="w-[100%] h-[100%] block" />
        <button
          onClick={showPrevImage}
          className="block absolute top-0 bottom-0 p-4 cursor-pointer left-0 carouselBtn"
        >
          <i className="fa-solid fa-left-long stroke-white fill-black w-8"></i>
        </button>
        <button
          onClick={showNextImage}
          className="block absolute top-0 bottom-0 p-4 cursor-pointer right-0 carouselBtn"
        >
          <i className="fa-solid fa-right-long stroke-white fill-black w-8"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
