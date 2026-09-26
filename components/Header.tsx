import Link from "next/link";
import { MenuItem } from "@/lib/wp";

function toPath(url: string) {
  try {
    const u = new URL(url);
    return u.pathname.replace("/index.php", "").replace(/\/$/, "") || "/";
  } catch {
    return "/";
  }
}

export default function Header({ menu }: { menu: MenuItem[] }) {
  const items = menu.length
    ? menu
    : [
        { id: 1, title: "Home", url: "/", order: 1, parent: "0" },
        { id: 2, title: "Shop", url: "/shop", order: 2, parent: "0" },
        { id: 3, title: "Blog", url: "/blog", order: 3, parent: "0" },
        { id: 4, title: "About Us", url: "/about-us", order: 4, parent: "0" },
        { id: 5, title: "Contact", url: "/contact", order: 5, parent: "0" },
      ];

  return (
    <header className="border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-white">
            🛍️
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            PARIJAT<span className="text-brand-orange">WEAVES</span>
            <span className="block text-[10px] font-normal tracking-wide text-gray-500">
              Style. Confidence. You.
            </span>
          </span>
        </Link>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {items.map((item) => (
            <Link
              key={item.id}
              href={toPath(item.url)}
              className="text-gray-700 hover:text-brand-orange"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-lg text-gray-700">
          <button aria-label="Search">🔍</button>
          <button aria-label="Account">👤</button>
          <button aria-label="Wishlist">🤍</button>
          <button aria-label="Cart" className="relative">
            🛒
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
