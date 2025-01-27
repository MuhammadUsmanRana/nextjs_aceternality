"use client";
import React from "react";
import { NavbarDemo } from "@/components/templates/shared/Navbar";
// import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <NavbarDemo />
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
          Background <br /> lights are cool you know.
        </div>
        <div className="font-extralight text-lg md:text-4xl dark:text-neutral-200 py-4 text-center">
          And this, is chemical burn. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, soluta.
        </div>
        <Button className="">
          Get started
        </Button>
      </motion.div>
    </AuroraBackground>
          {/* <div className="flex justify-center mt-6">
            <Button>Get Started</Button>
          </div> */}
    </>
  );
}
