import type React from "react"
import type { Metadata } from "next"
import { Poppins, Space_Grotesk, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ContactModalProvider } from "@/components/contact-modal"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Knewish360 - Professional Relocation & Renovation Services",
  description:
    "Transform your office or home with Knewish360. Expert relocation, renovation, solar installation, electrical services, and AC maintenance. Get a free consultation today.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${manrope.variable} font-body antialiased bg-background text-foreground`}
      >
        <ContactModalProvider>{children}</ContactModalProvider>
        <Analytics />
      </body>
    </html>
  )
}
