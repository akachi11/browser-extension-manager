import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "@heroui/styles/css";
import Providers from "@/components/Providers";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Extensions Manager",
  description: "Manage your browser extensions",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
