import React from "react";
import { ParaghraphSmallProps } from "@/types/types"

const ParagraphSmall: React.FC<ParaghraphSmallProps> = ({
    children,
    padding,
    margin,
    fontSize,
    lineHeight,
    fontFamily,
    textAlign,
    fontSizeMd,
    fontSizeLg,
    className,
    style,
    color
}) => {
    return (
        <p
            className={
                `
                text-black
                ${fontSize ? fontSize : "text-sm"}
                ${padding ? padding : "p-2"}
                ${color ? color : "text-white"}
                ${margin ? margin : "m-auto"}
                ${lineHeight ? lineHeight : ""}
                ${fontFamily ? fontFamily : ""}
                ${textAlign ? textAlign : "text-center"}
                ${fontSizeMd ? `md:${fontSizeMd}` : "md:text-lg"}
                ${fontSizeLg ? `lg:${fontSizeLg}` : "lg:text-xl"}
                font-semibold
                leading-snug
                ${className ? className : ""}
            `}
            style={style}
        >
            {children}
        </p>
    );
}

export default ParagraphSmall;
