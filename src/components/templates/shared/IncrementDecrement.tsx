import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export interface IncrementDecrementProps {
    className?: string;
    value: number;
    onDecrement: () => void;
    onIncrement: () => void;
}

export const IncrementDecrement = ({
    className,
    value,
    onIncrement,
    onDecrement
}: IncrementDecrementProps) => {

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <HoverBorderGradient containerClassName="rounded-full" as="button" onClick={onDecrement}>
                -
            </HoverBorderGradient>
            <span className="font-mono">{value ? value : 1}</span>
            <HoverBorderGradient containerClassName="rounded-full" as="button" onClick={onIncrement}>
                +
            </HoverBorderGradient>
        </div>
    );
};
