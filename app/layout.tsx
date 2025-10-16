import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Downtown Mount Sterling Redevelopment | Historic Commercial & Residential Spaces",
  description: "Historic redevelopment of three buildings in downtown Mount Sterling, Ohio. Commercial and residential spaces available. Exposed brick, modern amenities, below-market rents.",
  keywords: ["Mount Sterling", "Ohio", "commercial space", "apartments", "historic buildings", "downtown", "retail space", "office space"],
  openGraph: {
    title: "Downtown Mount Sterling Redevelopment",
    description: "Historic commercial and residential spaces in downtown Mount Sterling, Ohio",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
