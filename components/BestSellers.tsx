import { Product, displayPrice, getProducts } from "@/lib/wp";

export default async function BestSellers() {
  const products: Product[] = await getProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-center text-2xl font-extrabold tracking-wide">
        BEST SELLERS
      </h2>
      <div className="mx-auto mt-2 h-0.5 w-16 bg-brand-orange" />

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {products.length === 0 && (
          <p className="col-span-full text-center text-sm text-gray-500">
            Products will appear here once they're published in WooCommerce.
          </p>
        )}
        {products.map((p) => {
          const price = displayPrice(p);
          const image = p.images[0]?.src;
          return (
            <a
              key={p.id}
              href={p.permalink}
              className="group block rounded-lg border border-gray-100 p-3"
            >
              <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md bg-gray-50">
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image}
                    alt={p.name}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                ) : (
                  <span className="text-4xl">👕</span>
                )}
                {price.onSale && (
                  <span className="absolute left-2 top-2 rounded bg-brand-orange px-2 py-0.5 text-[10px] font-bold text-white">
                    SALE
                  </span>
                )}
              </div>
              <p className="mt-3 line-clamp-1 text-sm font-medium">{p.name}</p>
              <p className="mt-1 text-sm font-bold">
                {price.symbol}
                {price.price}
                {price.onSale && (
                  <span className="ml-2 text-xs font-normal text-gray-400 line-through">
                    {price.symbol}
                    {price.regular}
                  </span>
                )}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
