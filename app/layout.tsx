import { Metadata } from 'next'
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Guilherme Novaes | Portfolio',
  description: 'Welcome to my personal portfolio!',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  )
}
