import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO & Social Sharing
export const metadata = {
  title: "Beast Life | Fitness & Supplements",
  description:
    "Beast Life is your one-stop destination for premium supplements, expert training plans, and personalized nutrition guidance. Train smart. Eat right. Live the Beast Life.",
  keywords: [
    "Beast Life",
    "fitness supplements",
    "gym nutrition",
    "whey protein",
    "pre workout",
    "creatine",
    "fitness plans",
    "nutrition guidance",
  ],
  authors: [{ name: "Beast Life Team" }],
  creator: "Beast Life",
  publisher: "Beast Life",
  openGraph: {
    title: "Beast Life | Fitness & Supplements",
    description:
      "Fuel your journey with premium supplements, training programs, and nutrition guidance.",
    url: "https://www.beastlife.in",
    siteName: "Beast Life",
    images: [
      {
        url: "/og-image.png", // place this image in /public
        width: 1200,
        height: 630,
        alt: "Beast Life - Fitness & Supplements",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beast Life | Fitness & Supplements",
    description:
      "Train smart. Eat right. Live the Beast Life with premium supplements and expert plans.",
    images: ["/assets/beastLogo.jpg"],
    creator: "@beastlife", //
  },
  icons: {
    icon: "/assets/beastLogo.jpg", // put favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional for iOS homescreen
  },
  manifest: "/site.webmanifest", // optional for PWA setup
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* -------- Header -------- */}
          <header className="w-full bg-orange-600 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
              {/* Logo */}
              <Link href="/" className="flex items-center cursor-pointer">
                <Image
                  src="/assets/beastLogo.jpg"
                  alt="Beast Life Logo"
                  width={50}
                  height={50}
                  className="rounded-full shadow mr-2"
                  priority
                />
                <span className="text-3xl font-extrabold tracking-wide">
                  <span className="text-orange-300">BEAST</span>{" "}
                  <span className="text-orange-200">LIFE</span>
                </span>
              </Link>

              {/* Navigation */}
              <nav className="flex space-x-6 text-lg font-medium">
                <Link
                  href="/about"
                  className="hover:text-orange-200 transition"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="hover:text-orange-200 transition"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-orange-200 transition"
                >
                  Contact
                </Link>
              </nav>

              {/* Sign In button */}
              <Link
                href="/login"
                className="hover:text-orange-200 transition"
              >
                <div>
                  <button className="bg-white text-orange-700 font-semibold px-4 py-1 rounded-full shadow hover:bg-orange-100 transition">
                    Sign In
                  </button>
                </div>
              </Link>
            </div>
          </header>

          {/* -------- Page Content -------- */}
          <main className="flex-1">{children}</main>

          {/* -------- Footer -------- */}
          <footer className="bg-orange-600 text-white text-center py-4 text-sm">
            © 2025 Beast Life. All Rights Reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
