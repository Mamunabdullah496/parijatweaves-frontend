const tiles = [
  {
    label: "Outerwear",
    title: "New\nCollection",
    image: "https://picsum.photos/seed/parijat-outerwear/500/500",
    href: "/shop",
  },
  {
    label: "Dresses",
    title: "Hot\nCollection",
    image: "https://picsum.photos/seed/parijat-dresses/500/500",
    href: "/shop",
  },
  {
    label: "Tops",
    title: "Hot\nDeals",
    image: "https://picsum.photos/seed/parijat-tops/500/500",
    href: "/shop",
  },
  {
    label: "Kids",
    title: "Trendy\nStyle",
    image: "https://picsum.photos/seed/parijat-kids/500/500",
    href: "/shop",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
          {tiles.slice(0, 2).map((t) => (
            <Tile key={t.label} {...t} />
          ))}
        </div>

        <a
          href="/shop"
          className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-100 text-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/parijat-handbag/500/300"
            alt="Handbags collection"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <p className="text-2xl font-extrabold text-brand-orange">
              10% OFF
            </p>
            <p className="text-sm text-gray-600">on selected handbags</p>
            <span className="mx-auto mt-4 inline-block rounded bg-brand-dark px-5 py-2 text-xs font-semibold text-white">
              Shop Now
            </span>
          </div>
        </a>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
          {tiles.slice(2, 4).map((t) => (
            <Tile key={t.label} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  label,
  title,
  image,
  href,
}: {
  label: string;
  title: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between overflow-hidden rounded-lg bg-gray-100"
    >
      <div className="p-6">
        <p className="text-xs font-semibold uppercase text-brand-orange">
          {label}
        </p>
        <p className="whitespace-pre-line text-xl font-extrabold leading-tight">
          {title}
        </p>
        <span className="mt-3 inline-block rounded bg-brand-dark px-4 py-1.5 text-xs font-semibold text-white">
          Shop Now
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={label}
        className="h-28 w-28 flex-shrink-0 object-cover sm:h-32 sm:w-32"
      />
    </a>
  );
}
