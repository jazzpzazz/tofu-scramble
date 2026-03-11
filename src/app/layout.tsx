import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tofu-scramble | Jazz's Portfolio",
  description:
    "Personal portfolio showcasing AI projects, creative experiments, and the things that make me me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
