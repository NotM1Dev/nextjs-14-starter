import type { Metadata } from 'next';
import './globals.css';

import { Inter } from 'next/font/google';

const font = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Next.js 14 Starter',
  description: 'A starter Next.js project.'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
