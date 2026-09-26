const features = [
  { icon: "🚚", title: "Free Shipping", sub: "On orders over $99" },
  { icon: "🔄", title: "Easy Returns", sub: "Within 30 days" },
  { icon: "🛡️", title: "Secure Payment", sub: "100% secure checkout" },
  { icon: "🎧", title: "24/7 Support", sub: "We're here to help" },
];

export function FeatureStrip() {
  return (
    <section className="border-y border-gray-100 bg-brand-cream/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <span className="text-2xl">{f.icon}</span>
            <div>
              <p className="text-sm font-semibold">{f.title}</p>
              <p className="text-xs text-gray-500">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 items-center gap-8 rounded-lg bg-brand-cream p-8 md:grid-cols-2 md:p-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/parijat-newsletter/500/400"
          alt="Special offer model"
          className="mx-auto h-56 w-full rounded-lg object-cover md:mx-0"
        />
        <div>
          <p className="text-sm font-semibold uppercase text-gray-500">
            Special Offer
          </p>
          <h3 className="mt-2 text-3xl font-extrabold">
            Get <span className="text-brand-orange">20% Off</span>
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            On all t-shirt collection
          </p>
          <form className="mt-5 flex max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-brand-orange"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded bg-brand-orange px-5 py-2 text-sm font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
