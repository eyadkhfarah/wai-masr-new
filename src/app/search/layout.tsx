import { Metadata } from "next";

interface SearchLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: SearchLayoutProps) {
  return <>{children}</>;
}
