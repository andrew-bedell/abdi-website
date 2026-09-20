import Script from "next/script";
import { unstable_rethrow } from "next/navigation";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCatalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Zimba Tours | Premium Kilimanjaro & Safari Experiences in Tanzania",
  description:
    "Zimba Tours offers premium Kilimanjaro treks and luxury safari experiences in Tanzania. Led by founder Abdi from Arusha, we provide safe, ethical, and unforgettable adventures.",
  keywords:
    "Kilimanjaro, Tanzania safari, Serengeti, Ngorongoro Crater, Arusha tours, Mount Kilimanjaro trek, African safari",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { catalog } = await getCatalog().catch(error => {
    unstable_rethrow(error);
    return { catalog: {
    services: [], groups: [], navigation: [
      { id: 'experiences', label: 'Experiences', type: 'page' as const, target: '/experiences', parentId: null },
      { id: 'about', label: 'About', type: 'page' as const, target: '/about', parentId: null },
      { id: 'safety', label: 'Safety', type: 'page' as const, target: '/safety', parentId: null },
    ],
  } };
  });
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_DISCOVERY_SITE_KEY && (
          <Script
            src="https://platform.discoverymarketing.io/site-kit.js"
            data-site-key={process.env.NEXT_PUBLIC_DISCOVERY_SITE_KEY}
            data-site-release-revision={process.env.VERCEL_GIT_COMMIT_SHA ? `git:${process.env.VERCEL_GIT_COMMIT_SHA}` : process.env.NEXT_PUBLIC_DISCOVERY_RELEASE_REVISION}
            strategy="afterInteractive"
          />
        )}
        <Header catalog={catalog} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
