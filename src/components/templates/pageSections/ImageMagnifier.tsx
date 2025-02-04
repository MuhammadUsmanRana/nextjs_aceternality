/*************  ✨ Codeium Command ⭐  *************/
import React, { useState } from "react";
import Image from "next/image";

type ImageMagnifierProps = {
    imgUrl: string;
    alt: string;
    className?: string;
};

const ImageMagnifier = ({
    imgUrl,
    alt,
    className,
}: ImageMagnifierProps): JSX.Element => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setcursorPosition] = useState({ x: 0, y: 0 });

    // function to handle mouse hover over image 
    const handleMouseHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { left, top, width, height } = (e.target as HTMLDivElement).getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPosition({ x, y });
        setcursorPosition({ x: e.pageX, y: e.pageY });
    };

    return (
        <div
            className={`${className} relative`}
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseHover}
        >
            <Image
                width={400}
                height={400}
                src={imgUrl}
                alt={alt}
                className="cursor-pointer"
                layout="responsive"
                objectFit="cover"
            />
            {
                showMagnifier && (
                    <div className="absolute"
                        style={{
                            left: `${cursorPosition.x - 200}px`,
                            top: `${cursorPosition.y - 100}px`,
                            pointerEvents: 'none'
                        }}
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                            style={{
                                backgroundImage: `url(${imgUrl})`,
                                backgroundPosition: `${position.x}% ${position.y}%`,
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                border: '4px solid #fff'
                            }}
                        >
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ImageMagnifier;
/******  e1b213ee-2f77-4c48-8748-5c05e5255e2e  *******/ 