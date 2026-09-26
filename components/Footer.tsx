import { MenuItem } from "@/lib/wp";

export default function Footer({ menu }: { menu: MenuItem[] }) {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <p className="text-lg font-extrabold text-white">
            PARIJAT<span className="text-brand-orange">WEAVES</span>
          </p>
          <p className="mt-2 text-sm">
            Your one-stop destination for the latest fashion trends.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Shop</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Dresses</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Customer Service</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {menu.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} ParijatWeaves. All Rights Reserved.
      </div>
    </footer>
  );
}
