import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AcademicProvider } from '@/contexts/AcademicContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'HOD Dashboard - STES',
  description: 'Professional HOD dashboard for managing courses, students, and resources',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AcademicProvider>
          {children}
        </AcademicProvider>
      </body>
    </html>
  );
}


