const WP_URL = process.env.NEXT_PUBLIC_WP_URL || "https://parijatweaves.com";

export type MenuItem = {
  id: number;
  title: string;
  url: string;
  order: number;
  parent: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  prices: {
    price: string;
    regular_price: string;
    sale_price: string;
    currency_symbol: string;
    currency_minor_unit: number;
  };
  on_sale: boolean;
  images: { id: number; src: string; alt: string }[];
};

function formatPrice(minorUnitPrice: string, minorUnit: number) {
  const value = Number(minorUnitPrice) / Math.pow(10, minorUnit);
  return value.toFixed(2);
}

export async function getMenu(location = "main-menu"): Promise<MenuItem[]> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/pw/v1/menu/${location}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getProducts(params = ""): Promise<Product[]> {
  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wc/store/v1/products?per_page=8${params}`,
      { next: { revalidate: 900 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function displayPrice(p: Product) {
  const unit = p.prices.currency_minor_unit;
  return {
    price: formatPrice(p.prices.price, unit),
    regular: formatPrice(p.prices.regular_price, unit),
    symbol: p.prices.currency_symbol,
    onSale: p.on_sale && p.prices.sale_price !== p.prices.regular_price,
  };
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch(`${WP_URL}/wp-json/pw/v1/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
