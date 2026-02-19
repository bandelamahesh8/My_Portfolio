import * as React from "react";
import { motion, Variants } from "framer-motion";


import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

/**
 * Props for the FreelancerProfileCard component.
 */
interface FreelancerProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The user's full name. */
  name: string;
  /** The user's job title or role. */
  title: string;
  /** URL for the user's avatar image. */
  avatarSrc: string;
  /** URL for the card's banner image. */
  bannerSrc: string;
  /** Custom text for slot 1 (e.g. "Design Systems") */
  stat1: string;
  /** Custom text for slot 2 (e.g. "Motion Architecture") */
  stat2: string;
  /** Custom text for slot 3 (e.g. "Full-Stack Execution") */
  stat3: string;
  /** A React node (e.g., array of icons) for the tools section. */
  tools: React.ReactNode;
  /** Optional click handler for the "Get in touch" button. */
  onGetInTouch?: () => void;
  /** Optional click handler for the bookmark icon. (Unused) */
  onBookmark?: () => void;
  /** Optional additional class names. */
  className?: string;
}

// Animation variants for Framer Motion
const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

const contentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3, // Start staggering after card loads
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

/**
 * A reusable, animated profile card component.
 */
export const FreelancerProfileCard = React.forwardRef<
  HTMLDivElement,
  FreelancerProfileCardProps
>(
  (
    {
      className,
      name,
      title,
      avatarSrc,
      bannerSrc,
      stat1,
      stat2,
      stat3,
      tools,
      onGetInTouch,
      onBookmark,
      ...props
    },
    ref
  ) => {
    // Standardize props for motion.div by removing incompatible event handlers
    const { onDrag, onDragStart, onDragEnd, onDragOver, ...motionProps } = props as any;

    const avatarName = name
      .split(" ")
      .map((n) => n[0])
      .join("");

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative w-full max-w-[850px] overflow-hidden rounded-[48px] bg-card shadow-[0_48px_80px_-24px_rgba(0,0,0,0.6)]",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        {...motionProps}
      >
        {/* Banner Image */}
        <div className="h-60 w-full">
          <img
            src={bannerSrc}
            alt={`${name}'s banner`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Avatar (overlaps banner) */}
        <div className="absolute left-14 top-60 -translate-y-1/2">
          <Avatar className="h-32 w-32 border-[8px] border-card shadow-3xl">
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback>{avatarName}</AvatarFallback>
          </Avatar>
        </div>

        {/* Content Area */}
        <motion.div
          className="pl-14 pr-10 pb-12 pt-16" // Increased top padding to nudge content down for more height
          variants={contentVariants}
        >
          {/* Name, Title, and Tools */}
          <motion.div
            className="mb-4 flex items-start justify-between"
            variants={itemVariants}
          >
            <div className="max-w-[70%]">
              <h2 className="text-4xl font-bold text-white tracking-tighter leading-tight">
                {name}
              </h2>
              <p className="text-xl text-white/60 font-medium opacity-80">{title}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <div className="flex gap-2">{tools}</div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="my-6 flex items-center justify-around rounded-[20px] border border-border bg-background/30 px-3 py-4 shadow-inner"
            variants={itemVariants}
          >
            <StatItem value={stat1} />
            <Divider />
            <StatItem value={stat2} />
            <Divider />
            <StatItem value={stat3} />
          </motion.div>

          {/* Action Button */}
          <motion.div variants={itemVariants}>
            <Button className="w-full h-16 text-xl font-black rounded-[20px] shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out" size="lg" onClick={onGetInTouch}>
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);
FreelancerProfileCard.displayName = "FreelancerProfileCard";

// Internal StatItem component
const StatItem = ({
  icon: Icon,
  value,
  label,
}: {
  icon?: React.ElementType;
  value: string | number;
  label?: string;
}) => (
  <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
    <div className="flex items-center gap-1">
      {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
        {value}
      </span>
    </div>
    {label && <span className="text-xs capitalize text-muted-foreground">{label}</span>}
  </div>
);

// Internal Divider component
const Divider = () => <div className="h-10 w-px bg-border" />;
