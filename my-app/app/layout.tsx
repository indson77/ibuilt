import type { Metadata } from "next";
import { Roboto_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBuiltThis",
  description:
    "A community platform for creators to showcase their apps, AI tools,SaaS products, and creative projects. Authentic launches, realbuilders, genuine feedback."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${robotoMono.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}