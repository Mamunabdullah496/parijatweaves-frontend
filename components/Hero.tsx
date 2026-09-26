"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  badge: string;
  titleTop: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    badge: "New Season",
    titleTop: "Live For",
    titleHighlight: "Fashion",
    description: "— Up to 50% off on selected items",
    ctaLabel: "Shop Now",
    ctaHref: "/shop",
    image: "https://picsum.photos/seed/parijat-hero-fashion/700/900",
    imageAlt: "New season fashion model",
  },
  {
    badge: "Handwoven",
    titleTop: "Crafted With",
    titleHighlight: "Tradition",
    description: "— Authentic handloom weaves, made to last",
    ctaLabel: "Explore Collection",
    ctaHref: "/shop",
    image: "https://picsum.photos/seed/parijat-hero-handloom/700/900",
    imageAlt: "Handwoven traditional textile",
  },
  {
    badge: "Festive Edit",
    titleTop: "Dress The",
    titleHighlight: "Occasion",
    description: "— Curated looks for every celebration",
    ctaLabel: "View Festive",
    ctaHref: "/shop",
    image: "https://picsum.photos/seed/parijat-hero-festive/700/900",
    imageAlt: "Festive occasion outfit",
  },
];

const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  return (
    <section
      className="relative overflow-hidden bg-brand-cream"
      aria-roledescription="carousel"
      aria-label="Featured collections"
    >
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={slide.badge}
            className={`transition-all duration-700 ease-out ${
              index === current
                ? "relative translate-x-0 opacity-100"
                : "pointer-events-none absolute inset-0 translate-x-8 opacity-0"
            }`}
            aria-hidden={index !== current}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
              <div>
                <span className="inline-block rounded-full border border-brand-orange px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  {slide.badge}
                </span>
                <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-6xl">
                  {slide.titleTop}
                  <br />
                  <span className="text-brand-orange">
                    {slide.titleHighlight}
                  </span>
                </h1>
                <p className="mt-6 max-w-sm text-gray-600">
                  {slide.description}
                </p>
                <a
                  href={slide.ctaHref}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark px-7 py-3 text-sm font-semibold text-white hover:bg-black"
                >
                  {slide.ctaLabel} <span aria-hidden>→</span>
                </a>
              </div>

              <div className="relative mx-auto h-80 w-80 sm:h-[26rem] sm:w-[26rem]">
                <div className="absolute inset-0 rounded-full bg-orange-100" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.imageAlt}
                  className="absolute inset-0 h-full w-full rounded-[40%] object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-dark shadow-md backdrop-blur transition hover:bg-white"
      >
        <span aria-hidden className="text-xl">
          ‹
        </span>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-dark shadow-md backdrop-blur transition hover:bg-white"
      >
        <span aria-hidden className="text-xl">
          ›
        </span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.badge}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className={`h-2.5 rounded-full transition-all ${
              index === current
                ? "w-7 bg-brand-orange"
                : "w-2.5 bg-brand-orange/40 hover:bg-brand-orange/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
