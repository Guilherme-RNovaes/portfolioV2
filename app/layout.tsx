import { Metadata } from 'next'
import { Lexend } from "next/font/google"
import "./globals.css"
import Header from './_components/Header';
import ScrollToTopButton from './_components/ScrollToTopButton';

const googleFont = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

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
      <body className={`${googleFont.className} dark relative h-full w-full pb-10 bg-slate-950 text-white`}>
        <div className="absolute z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0f172a80_1px,transparent_1px),linear-gradient(to_bottom,#0f172a80_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <Header />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
