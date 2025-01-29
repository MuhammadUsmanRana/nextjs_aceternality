import React from "react";

export type cardDataProps = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    isNewItem: boolean;
    price: string;
}

export type HeaderLargeProps = {
    children: React.ReactNode;
    padding?: string;
    margin?: string;
    fontSize?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
    fontSizeMd?: string;
    fontSizeLg?: string;
    className?: string;
    style?: React.CSSProperties;
    color?: string;
}
export type HeaderMediumProps = {
    children: React.ReactNode;
    padding?: string;
    margin?: string;
    fontSize?: string;
    lineHeight?: string;
    fontFamily?: string;
    textAlign?: string;
    fontSizeMd?: string;
    fontSizeLg?: string;
    className?: string;
    style?: React.CSSProperties;
    color?: string;
}

export type ParaghraphLargeProps = {
    children: string;
    textSize?: string;
    textColor?: string;
}

export type ParaghraphSmallProps = {
    children: string;
    textSize?: string;
    textColor?: string;
}