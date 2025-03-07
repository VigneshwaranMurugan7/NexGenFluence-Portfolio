import React, { useState } from "react";
import drink1 from "../assets/drink1.jpg";
import prawn1 from "../assets/prawn1.jpg";
import home2 from "../assets/home2.jpg";
import InstagramFeed from "../components/InstagramFeed";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    [drink1, home2, prawn1],
    [home2, drink1, prawn1],
    [drink1, prawn1, home2],
    [home2, drink1, prawn1],
  ];

  const handleImageClick = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.flat().length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images.flat()[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + images.flat().length) % images.flat().length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images.flat()[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center justify-center relative pt-20 px-4 md:px-20 dark:bg-black"
    >
      <div>
        <div>
          <h2 className=" text-center text-5xl md:text-7xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            <span className="block">Gallery</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((column, colIndex) => (
              <div key={colIndex} className="grid gap-4">
                {column.map((src, index) => (
                  <img
                    key={index}
                    className="h-auto max-w-full rounded-lg cursor-pointer"
                    src={src}
                    alt="Gallery Item"
                    onClick={() =>
                      handleImageClick(src, colIndex * column.length + index)
                    }
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <div className="relative">
                <img
                  className="max-w-full max-h-screen rounded-lg"
                  src={selectedImage}
                  alt="Selected"
                />
                <button
                  className="fixed top-10 dark:bg-gray-400 p-2 rounded-full shadow-lg z-50 sm:right-4 right-4 lg:right-20"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons - Fixed at Left and Right of the Screen */}
          {selectedImage && (
            <>
              {/* Left Arrow */}
              <button
                type="button"
                onClick={prevImage}
                className="fixed top-1/2 transform -translate-y-1/2 dark:bg-gray-400 rounded-full shadow-lg z-50 sm:left-4 lg:left-20"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokelinecap="round"
                      strokelinejoin="round"
                      strokewidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>

              {/* Right Arrow */}

              <button
                type="button"
                onClick={nextImage}
                className="fixed top-1/2 transform -translate-y-1/2 dark:bg-gray-400 rounded-full shadow-lg z-50 sm:right-4 right-4 lg:right-20"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokelinecap="round"
                      strokelinejoin="round"
                      strokewidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </>
          )}
        </div>
        <div className=" z-10 px-4 pt-20">
          <h2 className=" text-center text-3xl md:text-5xl mt-11 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            <span className="block">Instagram Feed</span>
          </h2>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-7409c951-3bd5-412a-8643-b38072e1ddb0 rounded-lg"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
