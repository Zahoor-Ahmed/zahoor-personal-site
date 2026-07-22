import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zahoor Ahmed | AI Strategy & Business Automation Leader",
  description:
    "I help business leaders identify high-impact AI opportunities, automate critical workflows, and improve operations, growth, and decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans text-slate-950">
        <div className="site-scale">{children}</div>
      </body>
    </html>
  );
}
