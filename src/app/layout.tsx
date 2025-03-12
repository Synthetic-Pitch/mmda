import "./globals.css";
import { Lakki_Reddy,Poppins,Big_Shoulders_Display,Koulen } from "next/font/google";


const lakki = Lakki_Reddy({
  variable: "--font-lakki",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})
const poppins = Poppins({
  variable: "--font-lakki",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})
const bigShoulder = Big_Shoulders_Display({
  variable: "--font-big-shoulders-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})
const koulen =Koulen({
  variable: "--font-koulen",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lakki.variable}${poppins.variable}${bigShoulder.variable}${koulen.variable}antialiased`}>
        {children}
      </body>
    </html>
  );
}