import React, { useState } from "react";
import Image from "next/image";

type ImageMagnifierProps = {
  imgUrl: string;
  alt: string;
  className?: string;
};

const ImageMagnifier = ({ imgUrl, alt, className }: ImageMagnifierProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
    setCursorPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div
      className={`${className} relative w-full max-w-md mx-auto`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <Image
        width={500}
        height={500}
        src={imgUrl}
        alt={alt}
        className="w-full h-auto object-cover rounded"
      />
      {showMagnifier && ( // Hide on small screens
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <div
            className="absolute w-40 h-40 md:w-40 md:h-40 border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: "300%", // Adjust zoom level
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ImageMagnifier;
