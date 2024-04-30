import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Auth Ex 8",
  description: "NextJS Auth Example 8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col max-w-xl mx-auto gap-2 items-center">
          <div className="flex bg-gray-100 w-full py-4 shadow-md items-center justify-between px-2">
            <Link href="/" className="text-blue-400">
              Home
            </Link>
            <Link href="/test-auth" className="text-blue-400">
              Test Auth
            </Link>
            <h1 className="text-xl font-semibold">NextJS Auth Example 8</h1>
            <Link href="/api/bob" className="text-blue-400">
              Bob
            </Link>
            <Link href="/api/whoami" className="text-blue-400">
              whomai
            </Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
