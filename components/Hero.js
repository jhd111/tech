"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Waves from "./Waves";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop",
    title: "Everything you need.",
    subtitle: "Wireless Services",
    text: "HTS has a strong global presence, delivering solutions across more than 50 countries.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop",
    title: "Built for scale.",
    subtitle: "Network Deployment",
    text: "From site survey to full rollout, we deliver reliable networks on time, every time.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop",
    title: "Support that lasts.",
    subtitle: "Field & Managed Services",
    text: "24/7 field engineers and managed support across every sector we serve.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-[85vh] min-h-[560px] w-full items-center overflow-hidden bg-brand-dark">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="hero-slide absolute inset-0"
          style={{ opacity: index === active ? 1 : 0 }}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand/80 via-brand-light/60 to-brand/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center text-white">
        <h1
          key={active}
          className="animate-fade-slide text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          {slides[active].title}
          <br />
          {slides[active].subtitle}
        </h1>
        <p
          key={`text-${active}`}
          className="animate-fade-slide mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg"
        >
          {slides[active].text}
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-32 md:bottom-40">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={[
              "h-2 rounded-full transition-all duration-500",
              index === active ? "w-8 bg-white" : "w-2 bg-white/50",
            ].join(" ")}
          />
        ))}
      </div>

      {/* Animated waves at the bottom */}
      <Waves />
    </section>
  );
}
