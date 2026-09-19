import Script from "next/script";
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
        {process.env.NEXT_PUBLIC_DISCOVERY_SITE_KEY && (
          <Script
            src="https://platform.discoverymarketing.io/site-kit.js"
            data-site-key={process.env.NEXT_PUBLIC_DISCOVERY_SITE_KEY}
            data-site-release-revision={process.env.VERCEL_GIT_COMMIT_SHA ? `git:${process.env.VERCEL_GIT_COMMIT_SHA}` : process.env.NEXT_PUBLIC_DISCOVERY_RELEASE_REVISION}
            strategy="afterInteractive"
          />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
