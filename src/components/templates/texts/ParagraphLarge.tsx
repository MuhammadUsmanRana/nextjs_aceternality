import { ParaghraphLargeProps } from "@/types/types";
import React from "react";


const ParagraphLarge: React.FC<ParaghraphLargeProps> = ({
    children,
    textSize,
    textColor
}) => {
    return (
        <p
            className={
                (textColor ? textColor : "text-white") + (textSize ? textSize : "text-lg") +
                " text-semibold md:text-xl sm:text-lg"
            }
        >
            {children}
        </p>
    );
}

export default ParagraphLarge;
