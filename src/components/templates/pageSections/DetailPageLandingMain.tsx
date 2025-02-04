"use client";
import Image from 'next/image';
import React from 'react';
import { IMAGES } from '../../../../public';
import { CardData } from '@/data/CardData';
import ParagraphSmall from '../texts/ParagraphSmall';
import HeadingLarge from '../headings/HeadingLarge';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ImageMagnifier from './ImageMagnifier';
import Link from 'next/link';
import HeadingMedium from '../headings/HeadingMedium';
import { cardDataProps } from '@/types/types';
import { ROUTES } from '@/lib/ROUTES';


const DetailPageLandingMain = ({ slug }: { slug: string }) => {
    const item = CardData.find((item: { slug: string; }) => item.slug === slug);
    const sliderItem = CardData.filter((cittentItem: { slug: string; }) => cittentItem.slug !== slug);
    return (
        <>
            <section className="body-font overflow-hidden flex flex-col items-center justify-center">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <ImageMagnifier
                            alt={item?.slug || 'detail-image'}
                            className="lg:w-1/2 w-full lg:h-auto aspect-3/2 object-cover rounded"
                            imgUrl={item?.image || IMAGES.DETAIL_SHOW_IMAGE}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <ParagraphSmall color="text-gray-300" textAlign="text-left" padding="p-0">Brand - {item?.BrandName}</ParagraphSmall>
                            <HeadingLarge textAlign="text-left" padding="py-2" fontFamily="font-semibold">
                                {item?.title}
                            </HeadingLarge>
                            <div className="flex mb-4">
                                <span className="flex items-center">
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
                            <div className="flex justify-end mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex items-center bg-black">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded-full border appearance-none py-2 text-base pl-3 pr-10 bg-black text-white">
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                            <option>X-Large</option>
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
                            </div>
                            <div className="flex justify-between">
                                <span className="title-font font-medium text-2xl text-white">
                                    ${item?.price}
                                </span>
                                <Link href={ROUTES.ADDTOCART}>
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                    >
                                        <Image src={IMAGES.ADD_TO_CART_IMAGE} alt="add to cart" width={20} height={20} />
                                        <span>Add to cart</span>
                                    </HoverBorderGradient>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HeadingLarge margin="mb-6" textAlign="text-left" padding='px-8'>More like this</HeadingLarge>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {
                    sliderItem.map((item: cardDataProps) => (
                        <SwiperSlide key={item.id}>
                            <Link href={`${ROUTES.SHOEDETAILPAGE}/${item?.slug}`}>
                                <Image
                                    width={300}
                                    height={300}
                                    alt="ecommerce"
                                    className="object-cover object-center rounded"
                                    src={item?.image || IMAGES.DETAIL_SHOW_IMAGE}
                                />
                            </Link>
                            <HeadingMedium fontSize="text-sm">{item?.title}</HeadingMedium>
                            <ParagraphSmall
                                className="hidden-hover"
                                style={{
                                    height: "50px",
                                    position: "absolute",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    width: "100%"
                                }}
                            >
                                {item?.description}
                            </ParagraphSmall>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>

    )
}

export default DetailPageLandingMain;