import {
  motion,
  useAnimation,
  type Transition,
  type Variants,
} from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const variants: Variants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const baseTransition: Transition = { duration: 0.6, ease: "easeOut" };

type StayMotionProps = {
  children: React.ReactNode;
  delay?: number;
};

const StayMotion: React.FC<StayMotionProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView)
      controls.start({
        ...(variants.show as object),
        transition: { ...baseTransition, delay },
      });
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default StayMotion;
