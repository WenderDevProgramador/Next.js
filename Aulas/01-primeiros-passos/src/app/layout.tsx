import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import localFont from "next/font/local"
import "./globals.css"
import {Quicksand} from "next/font/google"

const robotoCondensed = localFont({
  src: "./fonts/robotoCondensed-VariableFont_wght.ttf",
  variable: "--font-roboto-condensed",
  weight: '400 700',
  display: "swap",
})

const QuicksandFonts = Quicksand({
  variable: '--font-quicksand',
  weight: '300',

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${QuicksandFonts.variable}`}>
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
