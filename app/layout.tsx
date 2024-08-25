import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WWSI",
  description: "World Wide Sentiment Indicator - Indicates the Percentage of Positive Sentiment found in the World News using AWS Comprehend AI sentiment analyzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <link rel="icon" href="/icon?"type="image/" sizes=""/>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </head>
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
