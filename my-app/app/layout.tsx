import type { Metadata } from "next";
import { Roboto_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBuiltThis",
  description:
    "iBuiltThis is a platform for showcasing and discovering innovative projects and ideas.",
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