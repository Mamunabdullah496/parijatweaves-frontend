import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">Contact Us</h1>
      <p className="mt-2 text-sm text-gray-500">
        Messages submitted here are saved in WordPress (Contact Messages) and
        emailed to the site admin.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
