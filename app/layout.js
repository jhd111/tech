import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.htechsupports.com"),
  title: {
    default: "H-Tech Supports | Global Wireless & Network Services",
    template: "%s | H-Tech Supports",
  },
  description:
    "H-Tech Supports delivers wireless services, network deployment, and field support solutions across more than 50 countries with pace and agility.",
  keywords: [
    "H-Tech Supports",
    "wireless services",
    "network deployment",
    "field services",
    "managed IT services",
    "site surveys",
  ],
  openGraph: {
    title: "H-Tech Supports | Global Wireless & Network Services",
    description:
      "Everything you need. Wireless services delivered across more than 50 countries.",
    url: "https://www.htechsupports.com",
    siteName: "H-Tech Supports",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-Tech Supports | Global Wireless & Network Services",
    description:
      "Everything you need. Wireless services delivered across more than 50 countries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
