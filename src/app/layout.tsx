import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/Button/ScrollBtn";
import { ThemeProvider } from "@/components/theme-provider";

const title = "%s :: وعي - مصر";
const desc = "إبدأ تجربتك الأولى في القومية المصرية من وعي - مصر";

const siteUrl = process.env.PUBLIC_DOMAIN_URL || "https://w3ieg.com";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  title: {
    default: "وعي - مصر",
    template: title,
  },
  description: desc,
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: {
      default: "وعي - مصر",
      template: title,
    },
    description: desc,
    images: {
      url: "/images/main.png",
      width: 800,
      height: 600,
      alt: "W3i Masr cover",
      type: "image/jpeg",
    },
    type: "website",
  },

  // verification: {
  //   google: "e9KKlwWBaGAC9j-OtGtGMXX6Es77KJAPO4IxuX1WbRA",
  // },

  twitter: {
    site: "@W3imasr",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
