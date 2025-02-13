import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import HeadingLarge from '../headings/HeadingLarge';
import { cardDataProps } from '@/types/types';
import { IMAGES } from '../../../../public';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/ROUTES';
import HeadingMedium from '../headings/HeadingMedium';

const SliderList = ({ sliderItem }: { sliderItem: cardDataProps[] }) => {
    return (
        <>
            <HeadingLarge margin="mb-6" textAlign="text-center" padding="px-8">
                More like this
            </HeadingLarge>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {sliderItem?.map((item: cardDataProps) => (
                    <SwiperSlide key={item.id} className="relative group overflow-visible">
                        <div className="relative">
                            <Image
                                width={300}
                                height={300}
                                alt="ecommerce"
                                className="object-cover object-center rounded"
                                src={item?.image || IMAGES.DETAIL_SHOW_IMAGE}
                            />
                            <HeadingMedium fontSize="text-sm" padding='p-4'>{item?.title}</HeadingMedium>
                            <Link href={`${ROUTES.SHOEDETAILPAGE}/${item?.slug}`}>
                                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50 text-white transition-all duration-500 px-16 py-8'>
                                    <span>
                                        {item?.description}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SliderList;
