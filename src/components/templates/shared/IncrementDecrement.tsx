/*************  ✨ Codeium Command ⭐  *************/
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export interface IncrementDecrementProps {
    className?: string;
    value: number;
    onChange: (value: number) => void;
}

export const IncrementDecrement = ({
    className,
    value,
    onChange,
}: IncrementDecrementProps) => {
    const [localValue, setLocalValue] = useState(value);

    const increment = () => {
        setLocalValue((prev) => prev + 1);
        onChange(localValue + 1);
    };

    const decrement = () => {
        setLocalValue((prev) => prev - 1);
        onChange(localValue - 1);
    };

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <HoverBorderGradient containerClassName="rounded-full" as="button" onClick={decrement}>
                -
            </HoverBorderGradient>
            <span className="font-mono">{localValue}</span>
            <HoverBorderGradient containerClassName="rounded-full" as="button" onClick={increment}>
                +
            </HoverBorderGradient>
        </div>
    );
};
/******  7e29d83c-815b-41ba-8da6-a5e776519a06  *******/ 