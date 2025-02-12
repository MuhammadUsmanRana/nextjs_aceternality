import React from 'react';

import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { cardDataProps } from "@/types/types";
import HeadingLarge from '../headings/HeadingLarge';
import Link from 'next/link';
import { ROUTES } from '@/lib/ROUTES';

interface MainCardsSectionProps {
    isNewItemCreate: cardDataProps[]
}

const MainCardsSection: React.FC<MainCardsSectionProps> = ({ isNewItemCreate }) => {
    return (
        <div className="bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg pb-6">
            <HeadingLarge padding="py-8" fontSize="text-4xl" margin='mb-4'>This is card section</HeadingLarge>
            <div className="flex flex-wrap gap-4 justify-center item-center w-full">
                {
                    isNewItemCreate && isNewItemCreate.map((item: cardDataProps) => (
                        <div className="flex justify-between" key={item.id}>
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-zinc-900 h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                    className="object-contain"
                                />
                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {item.title}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 text-[1rem] leading-[22.81px] tracking-[-2.5%] overflow-hidden line-clamp-4 max-h-[92px] h-full">
                                    {item.description}
                                </p>
                                <div className="flex justify-between">
                                    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                        <span>Buy now </span>
                                        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                            ${item.price}
                                        </span>
                                    </button>
                                    <Link href={`${ROUTES.SHOEDETAILPAGE}/${item.slug}`}>
                                        <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                            <span>Show detail</span>
                                        </button>
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MainCardsSection;