export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">About ParijatWeaves</h1>
      <p className="mt-4 text-gray-600">
        ParijatWeaves is your one-stop destination for the latest fashion
        trends — style and confidence, woven together. Content on this page
        is managed from the WordPress admin and can be wired up to fetch the
        "About Us" page content via the WordPress REST API
        (<code>/wp-json/wp/v2/pages</code>).
      </p>
    </section>
  );
}
