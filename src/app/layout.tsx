import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoNastaliqUrdu = localFont({
  src: [
    {
      path: "../../public/fonts/NotoNastaliqUrdu-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zarvo - Pakistani Farmers",
  description: "AI-powered crop disease identification and weather alerts for Pakistani farmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${notoNastaliqUrdu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <div className="mobile-container min-h-full flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
