import { GeistSans } from "geist/font/sans";
import "./global.css";

export const metadata = {
  title: 'Murugesh Aravind | Senior Frontend Engineer',
  description: 'Senior Frontend Engineer with 8+ years of experience designing and building scalable, high-performance web applications using React and TypeScript.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} bg-white dark:bg-neutral-950 leading-relaxed text-neutral-600 dark:text-neutral-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>
        {children}
      </body>
    </html>
  );
}