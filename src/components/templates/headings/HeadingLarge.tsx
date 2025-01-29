import { HeaderLargeProps } from '@/types/types'
import React from 'react'

const HeadingLarge: React.FC<HeaderLargeProps> = ({
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
        <h1
            className={
                `
        text-black
        ${fontSize ? fontSize : "text-lg"}
        ${padding ? padding : "p-2"}
        ${color ? color : "text-white"}
        ${margin ? margin : "m-auto"}
        ${lineHeight ? lineHeight : ""}
        ${fontFamily ? fontFamily : ""}
        ${textAlign ? textAlign : "text-center"}
        ${fontSizeMd ? `md:${fontSizeMd}` : "md:text-xl"}
        ${fontSizeLg ? `lg:${fontSizeLg}` : "lg:text-2xl"}
        font-semibold
        leading-snug
        ${className ? className : ""}
      `}
            style={style}
        >
            {children}
        </h1>
    )
}

export default HeadingLarge;