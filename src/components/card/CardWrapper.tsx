import { useEffect, useRef } from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  paddingY: string;
  paddingX: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  paddingX,
  paddingY,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / centerX;
      const moveY = (y - centerY) / centerY;

      const maxOffset = 3;
      const shadowX = moveX * maxOffset;
      const shadowY = moveY * maxOffset;

      card.style.setProperty("--shadow-x", `${shadowX}px`);
      card.style.setProperty("--shadow-y", `${shadowY}px`);
    };

    const handleLeave = () => {
      card.style.setProperty("--shadow-x", `3px`);
      card.style.setProperty("--shadow-y", `3px`);
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    card.style.setProperty("--shadow-x", `3px`);
    card.style.setProperty("--shadow-y", `3px`);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex-1 h-full transition-all ease-out rounded-4xl bg-[#f4f4f4]`}
      style={{
        padding: `${paddingY} ${paddingX}`,
        boxShadow: `
          calc(var(--shadow-x, 3px)) 
          calc(var(--shadow-y, 3px)) 
          0px 0px rgba(94, 59, 238, 1)`,
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
