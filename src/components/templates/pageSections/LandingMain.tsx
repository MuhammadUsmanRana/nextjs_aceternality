"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import MainCardsSection from "./MainCardsSection";
import { CardData } from "@/data/CardData";
import { cardDataProps } from "@/types/types";
import HeadingMedium from "../headings/HeadingMedium";
import { Typewriter } from 'react-simple-typewriter'



export default function LandingMain() {
    const isNewItemCreate = CardData.filter((item: cardDataProps) => item.isNewItem);

    return (
        <>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">
                    I am a {" "}
                    <Typewriter
                        words={['type writer!', 'infinity loop!', 'type speed 70!']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                     <br /> and my lights are cool you know.
                    </div>
                    <HeadingMedium>
                    And this, is chemical burn. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, soluta. for new reporsity
                    And this, is chemical burn. Lorem ipsum dolor sit amet consectetur, Eius, soluta. for new reporsity
                    And this, is chemical burn. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, soluta. for new reporsity
                    </HeadingMedium>
                    <Button>
                        Get started
                    </Button>
                </motion.div>
            </AuroraBackground>
            <MainCardsSection 
                isNewItemCreate={isNewItemCreate}
            />
        </>
    );
}
