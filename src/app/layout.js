import "./globals.css";
import { Inter } from "next/font/google";
import FluidBackground from "./components/FluidBackground";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mukul Garg Portfolio",
  description: "My portfolio website made in NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FluidBackground />
        <Analytics />
        <SpeedInsights />
        {children}
        </body>
    </html>
  );
}
