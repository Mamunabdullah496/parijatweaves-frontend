import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenu } from "@/lib/wp";

export const metadata: Metadata = {
  title: "ParijatWeaves | Style. Confidence. You.",
  description: "Live for fashion — new season arrivals at ParijatWeaves.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getMenu("main-menu");

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <TopBar />
        <Header menu={menu} />
        <main className="flex-1">{children}</main>
        <Footer menu={menu} />
      </body>
    </html>
  );
}
