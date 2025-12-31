'use client';
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement | null>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
     const { top, left } = to.current.getBoundingClientRect();
     mouseX.set(event.clientX - left);
     mouseY.set(event.clientY - top);
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    }
  }, []);

  return { mouseX, mouseY };
};


export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const backgroundPosition = useMotionTemplate`50% ${backgroundPositionY}px`;
  const { mouseX, mouseY } = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black, transparent)`;
  
  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={borderedDivRef}
          className="relative overflow-hidden rounded-xl border border-white/15 py-24
                     bg-cover bg-center group"
          animate= {{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_40%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100  transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto text-center tracking-tighter font-medium">
              AI-driven SEO for everyone.
            </h2>

            <p className="mt-5 px-4 text-center text-lg md:text-xl max-w-xs mx-auto tracking-tight text-white/70">
              Achieve clear, impactful results without the complexity.
            </p>

            <div className="mt-8 flex justify-center">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
