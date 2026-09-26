export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-block rounded-full border border-brand-orange px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
            New Season
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-6xl">
            Live For
            <br />
            <span className="text-brand-orange">Fashion</span>
          </h1>
          <p className="mt-6 max-w-sm text-gray-600">
            — Up to 50% off on selected items
          </p>
          <a
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark px-7 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            Shop Now <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative mx-auto h-80 w-80 sm:h-[26rem] sm:w-[26rem]">
          <div className="absolute inset-0 rounded-full bg-orange-100" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/parijat-hero-fashion/700/900"
            alt="New season fashion model"
            className="absolute inset-0 h-full w-full rounded-[40%] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
