import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zimba Tours | Premium Kilimanjaro & Safari Experiences in Tanzania",
  description:
    "Zimba Tours offers premium Kilimanjaro treks and luxury safari experiences in Tanzania. Led by founder Abdi from Arusha, we provide safe, ethical, and unforgettable adventures.",
  keywords:
    "Kilimanjaro, Tanzania safari, Serengeti, Ngorongoro Crater, Arusha tours, Mount Kilimanjaro trek, African safari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
