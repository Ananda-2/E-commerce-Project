// import React from "react";
// import { Carousel, IconButton } from "@material-tailwind/react";

// export default function CarouselCustomArrows() {
//   return (
//     <Carousel
//       className="rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//       prevArrow={({ handlePrev }) => (
//         <IconButton
//           variant="text"
//           color="white"
//           size="lg"
//           onClick={handlePrev}
//           className="!absolute top-2/4 left-4 -translate-y-2/4"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="h-6 w-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
//             />
//           </svg>
//         </IconButton>
//       )}
//       nextArrow={({ handleNext }) => (
//         <IconButton
//           variant="text"
//           color="white"
//           size="lg"
//           onClick={handleNext}
//           className="!absolute top-2/4 !right-4 -translate-y-2/4"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="h-6 w-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </IconButton>
//       )}
//       autoplay={true}
//       autoplayDelay={5000}
//       loop={true}
//     >
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       />
//     </Carousel>
//   );
// }


// import React, { useState } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
//   "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//   "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
// ];

// export default function CustomCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === images.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="relative h-[400px] w-full m-auto">
//       <div className="absolute top-1/2 left-0 z-10 mx-10 ">
//         <button
//           onClick={goToPrevious}
//           className="bg-white text-black p-2 rounded-full"
//         >
//           &#10094;
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-4 z-10 mx-10 ">
//         <button
//           onClick={goToNext}
//           className="bg-white text-black p-2   rounded-full"
//         >
//           &#10095;
//         </button>
//       </div>
//       <div
//         style={{
//         // marginTop : 10 ,
//           backgroundImage: `url(${images[currentIndex]})`,
//           backgroundPosition: 'left',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           width: '100vw',
//           height: '100%',
//         }}
//       />
//     </div>
//   );
// }






import React, { useState, useEffect, useCallback } from "react";

const images = [
    'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg',
    'https://images.squarespace-cdn.com/content/v1/50d5be95e4b0d4d16b989dfb/1543179692442-QX1JZY5281Z96B5TDOZ3/070918_AsicsTiger_RunningShoes_78740042-E_WebWM.jpg',
    "https://images.squarespace-cdn.com/content/v1/5e10f555f51cd16ca72b83f8/1586689385550-6LWCNLJFBD1HVQMW191T/sports-shoe-product-photography.jpg",
//   "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
//   "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//   "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
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
    <div className="relative h-[500px] w-full  m-auto overflow-hidden">
      <div className="absolute top-1/2 left-4 z-10 mx-10 ">
        <button
          onClick={goToPrevious}
          className="bg-transparent text-black p-2 rounded-full"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 mx-10 ">
        <button
          onClick={goToNext}
          className="bg- textransparent-black p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width : '100vw',
            height: '100%',
            transform: `translateX(${100 * (index - currentIndex)}%)`,
          }}
        />
      ))}
    </div>
  );
}