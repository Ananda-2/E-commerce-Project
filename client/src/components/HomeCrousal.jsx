import React, { useState, useEffect, useCallback } from "react";

const images = [
    'https://images.pexels.com/photos/1869322/pexels-photo-1869322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.squarespace-cdn.com/content/v1/50d5be95e4b0d4d16b989dfb/1543179692442-QX1JZY5281Z96B5TDOZ3/070918_AsicsTiger_RunningShoes_78740042-E_WebWM.jpg',
    "https://images.squarespace-cdn.com/content/v1/5e10f555f51cd16ca72b83f8/1586689385550-6LWCNLJFBD1HVQMW191T/sports-shoe-product-photography.jpg",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="relative h-[500px] w-full  m-auto overflow-hidden [clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%)]">
      <div className="absolute top-1/2 left-4 z-10 mx-10 [clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%)]">
        <button
          onClick={goToPrevious}
          className="bg-white text-black p-2 rounded-full"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 mx-10 ">
        <button
          onClick={goToNext}
          className="bg-white textransparent-black p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out [clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%)]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width : '100vw',
            height: '100%',
            transform: `translateX(${100 * (index - currentIndex)}%)`,
            className:"[clip-path: polygon(0 0, 100% 0, 100% 100%, 0 79%);]"
          }}
        />
      ))}
    </div>
  );
}