"use client";

import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  number,
  ValueAnimationTransition,
} from "framer-motion";

interface Tab {
  icon: string;
  title: string;
  isNew: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
}

const tabs: Tab[] = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 40,
    backgroundPositionY: 20,
    backgroundSizeX: 130,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 70,
    backgroundPositionY: 10,
    backgroundSizeX: 160,
  },
];

const Featurestab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width,
      circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotlottieRef.current === null) return;
    dotlottieRef.current.seek(0);
    dotlottieRef.current.play();
  };
  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="flex items-center gap-3 rounded-xl border border-white/15 p-3 lg:flex-1 relative"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        ></motion.div>
      )}

      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15">
        <DotLottiePlayer
          ref={dotlottieRef}
          src={props.icon}
          className="h-6 w-6"
          autoplay
        />
      </div>

      <div className="flex-1 text-left">{props.title}</div>

      {props.isNew && (
        <span className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
          New
        </span>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animationOptions: ValueAnimationTransition = {
      duration: 1,
      ease: "easeInOut",
    };
    animate(
      backgroundPositionX,
      tabs[index].backgroundPositionX,
      animationOptions
    );
    animate(
      backgroundPositionY,
      tabs[index].backgroundPositionY,
      animationOptions
    );
    animate(backgroundSizeX, tabs[index].backgroundSizeX, animationOptions);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter">
          Elevate your SEO efforts
        </h2>

        {/* Description */}
        <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto tracking-tighter text-white/70">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        {/* Tabs */}
        <div className="mt-10 flex w-full max-w-4xl flex-col gap-3 lg:flex-row">
          {tabs.map((tab, tabIndex) => (
            <Featurestab
              {...tab}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
              key={`${tab.title}-${tabIndex}`}
            />
          ))}
        </div>

        {/* Product Image */}
        <div className="mt-6 w-full max-w-4xl rounded-xl border border-white/20 p-2.5">
          <motion.div
            className="aspect-video rounded-lg border border-white/20 bg-cover bg-center"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
