"use client";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import { motion } from "framer-motion";

const logos = [
  acmeLogo,
  apexLogo,
  celestialLogo,
  quantumLogo,
  pulseLogo,
  echoLogo,
];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      {/* WIDTH-CONSTRAINED + CENTERED WRAPPER */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Text */}
          <h2 className="text-lg font-semibold text-white/80 text-center md:text-left shrink-0">
            Trusted by top innovative teams
          </h2>

          {/* Logo ticker */}
          <div
            className="relative flex overflow-hidden w-full
            [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
          >
            <motion.div
              className="flex flex-none items-center gap-14 pr-14"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={`${logo.src}-${index}`}
                  src={logo.src}
                  alt="Company logo"
                  className="h-4 w-auto opacity-80"
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
