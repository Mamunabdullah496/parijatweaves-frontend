const messages = [
  "Free shipping on orders over $99",
  "Easy returns within 30 days",
  "Get 15% off on your first order",
];

export default function TopBar() {
  return (
    <div className="bg-brand-orange text-white text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 py-2">
        {messages.map((m) => (
          <span key={m} className="whitespace-nowrap">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
