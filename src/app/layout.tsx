import Provider from './redux/ReduxProvider'
import "./globals.css";
import { Lakki_Reddy,Poppins,Big_Shoulders_Display,Koulen,Kumar_One,Krona_One,Kadwa,Kufam,Poor_Story,Port_Lligat_Slab, Jura, Protest_Strike, Just_Another_Hand, Karantina, Poly } from "next/font/google";

import SessionProvider from './authProvider/sessionProvider';

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
const kumarOne = Kumar_One({
  variable:"--font-kumar-one",
  subsets:["latin"],
  weight:"400",
  display:'swap'
})
const kronaOne = Krona_One({
  variable:"--font-krona-one",
  subsets:["latin"],
  weight:"400",
  display:'swap'
})
const kadwa = Kadwa({
  variable :"--font-kadwa",
  subsets:["latin"],
  weight:"400",
  display:'swap'
})
const kufam = Kufam({
  variable:"--font-kufam",
  subsets:["latin"],
  weight:"400",
  display:'swap'
})
const poorStory = Poor_Story({
  variable:"--font-poor-story",
  subsets:["latin"],
  weight:"400",
  display:'swap'
})
const portlingab = Port_Lligat_Slab ({
  variable:"--font-port-lligat-slab",
  subsets:["latin"],
  weight:"400",
  display:'swap'
})
const jura = Jura ({
  variable:"--font-jura",
  subsets:["latin"],
  weight:"400",
  display:'swap'
})
const proteststrike = Protest_Strike({
  variable:"--font-protest-strike",
  subsets:["latin"],
  weight:"400",
  display:"swap"
})
const justanotherhand =Just_Another_Hand({
  variable:'--font-justanother-hand',
  subsets:["latin"],
  weight:'400',
  display:'swap'
})
const karantina = Karantina({
  variable:'--font-karantina',
  subsets:['latin'],
  weight:'400',
  display:'swap'
})
const poly = Poly({
  variable:'--font-poly',
  subsets:['latin'],
  weight:'400',
  display:'swap'
})


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning
        className={`
          ${lakki.variable} ${poppins.variable} ${bigShoulder.variable} ${koulen.variable}
          ${kumarOne.variable} ${kronaOne.variable} ${kadwa.variable} ${kufam.variable} 
          ${poorStory.variable}${portlingab.variable}${jura.variable}${proteststrike.variable}
          ${justanotherhand.variable} ${karantina.variable} ${poly.variable}
          antialiased`}
      >
        <SessionProvider>
          <Provider>
            {children}
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}