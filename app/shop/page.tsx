import { Product, displayPrice, getProducts } from "@/lib/wp";

export default async function ShopPage() {
  const products: Product[] = await getProducts("&per_page=24");

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">Shop</h1>
      <p className="mt-2 text-sm text-gray-500">
        Live product catalog, pulled from WooCommerce.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => {
          const price = displayPrice(p);
          const image = p.images[0]?.src;
          return (
            <a
              key={p.id}
              href={p.permalink}
              className="group block rounded-lg border border-gray-100 p-3"
            >
              <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md bg-gray-50">
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
              </div>
              <p className="mt-3 line-clamp-1 text-sm font-medium">{p.name}</p>
              <p className="mt-1 text-sm font-bold">
                {price.symbol}
                {price.price}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
