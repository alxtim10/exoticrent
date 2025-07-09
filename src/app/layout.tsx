import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css'

const inter = Poppins({ subsets: ["latin"], weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"] });

export const metadata: Metadata = {
  title: "Exotic Rent",
  description: "Best Exotic Whip Place to Rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
