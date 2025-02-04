"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/ROUTES";
import Link from "next/link";
import { IMAGES } from "../../../../public";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={ROUTES.HOME}><MenuItem setActive={setActive} active={active} item="Home" /></Link>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Bata Shoes"
              href={ROUTES.BATA}
              src={IMAGES.CARD1_SHOW_IMAGE}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Services Shoes"
              href={ROUTES.SERVICES}
              src={IMAGES.CARD2_SHOW_IMAGE}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Nike Shoes"
              href={ROUTES.NIKE}
              src={IMAGES.CARD3_SHOW_IMAGE}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Ladies Shoes"
              href={ROUTES.LADIES}
              src={IMAGES.CARD4_SHOW_IMAGE}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={ROUTES.ADDTOCART}>Cart</HoveredLink>
            {/* <HoveredLink href={ROUTES.}>Individual</HoveredLink>
            <HoveredLink href={ROUTES.TEAM}>Team</HoveredLink>
            <HoveredLink href={ROUTES.ENTERPRISE}>Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
