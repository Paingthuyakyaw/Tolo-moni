import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NextProvider from "@/provider/next-provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tolo-moni",
  description:
    "Tolo-moni is a seamless and efficient chat app designed to help you connect effortlessly with friends and family, offering fast messaging and an intuitive user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto_mono.variable} bg-gray-100 min-h-screen`}
      >
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
