"use client";
import React from 'react';
import { IMAGES } from '../../../../public';
import { CardData } from '@/data/CardData';
import ParagraphSmall from '../texts/ParagraphSmall';
import HeadingLarge from '../headings/HeadingLarge';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import ImageMagnifier from './ImageMagnifier';
import Link from 'next/link';
import { ROUTES } from '@/lib/ROUTES';
import SliderList from './SliderList';
import { cardDataProps } from '@/types/types';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IncrementDecrement } from '../shared/IncrementDecrement';


const DetailPageLandingMain = ({ slug }: { slug: string }) => {
    const [value, setValue] = React.useState(1);
    const item = CardData.find((item: { slug: string; }) => item.slug === slug);
    const sliderItem = CardData.filter((cittentItem: { slug: string; }) => cittentItem.slug !== slug);
    console.log("🚀 ~ DetailPageLandingMain ~ item:", item)

    // here set data not increment in stock length
    // const inStockItem = CardData.find((item: { inStock: number; }) => item.inStock > 0);
    // console.log("🚀 ~ DetailPageLandingMain ~ inStockItem:", inStockItem);

    const HandleIncrement = () => {
        if (item && value >= item.inStock) {
            return item?.inStock;
        }
        setValue(value + 1);
    }
    const HandleDecrement = () => {
        if (item && value <= 0) {
            return 1;
        }
        setValue(value - 1);
    }
    function addToCart({
        id,
        slug,
        title,
        description,
        image,
        isNewItem,
        price,
        size
    }: cardDataProps) {
        console.log("items", id, slug, title, description, image, isNewItem, price, size);
    }

    return (
        <>
            <section className="body-font overflow-hidden flex flex-col items-center justify-center">
                <div className="container px-5 py-24 lg:px-2 mx-auto">
                    <div className="flex flex-col mx-auto lg:flex-row items-center lg:items-start">
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <ImageMagnifier
                                alt={item?.slug || "detail-image"}
                                imgUrl={item?.image || IMAGES.DETAIL_SHOW_IMAGE}
                            />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <ParagraphSmall color="text-gray-300" textAlign="text-left" padding="p-0">Brand - {item?.BrandName}</ParagraphSmall>
                            <HeadingLarge textAlign="text-left" padding="py-2" fontFamily="font-semibold">
                                {item?.title}
                            </HeadingLarge>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <span className="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        {item?.isNewItem ? "New - product" : "product"}
                                    </span>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <ParagraphSmall color="text-gray-600">4 Reviews</ParagraphSmall>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {item?.description}
                            </p>
                            <div className="flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="relative flex items-center">
                                    <span className="mr-3">Quantity</span>
                                    <IncrementDecrement
                                        className=""
                                        value={value}
                                        onIncrement={HandleIncrement}
                                        onDecrement={HandleDecrement}
                                    />
                                </div>
                                <div className="relative">
                                    <span className="mr-3">Size</span>
                                    <select className="rounded-full border appearance-none py-2 text-base pl-3 pr-10 bg-black text-white">
                                        {
                                            item?.size?.map((size: string) => (
                                                <option key={size}>{size}</option>
                                            ))
                                        }
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span className="title-font font-medium text-2xl text-white">
                                    ${item?.price}
                                </span>
                                <Link href={ROUTES.ADDTOCART}
                                    onClick={() => addToCart(item as cardDataProps)}
                                >
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                    >
                                        <MdOutlineShoppingCart />
                                        <span>Add to cart</span>
                                    </HoverBorderGradient>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SliderList sliderItem={sliderItem} />
        </>
    )
}

export default DetailPageLandingMain;