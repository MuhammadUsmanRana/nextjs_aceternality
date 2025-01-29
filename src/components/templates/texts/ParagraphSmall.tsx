import React from "react";
import {ParaghraphSmallProps} from "@/types/types"

const ParagraphSmall: React.FC<ParaghraphSmallProps> = ({
    textSize,
    children,
    textColor
}) => {
    return (
        <p
            className={
                (textSize == "regular" ? "text-lg" : "") + (textColor ? textColor : "") + " "
            }
        >
            {children}
        </p>
    );
}

export default ParagraphSmall;
