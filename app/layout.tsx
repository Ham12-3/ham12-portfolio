import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Script from 'next/script';
import { ReactNode } from 'react';

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

export const metadata = {
  title: "Abdulhamid Sonaike — Software Engineer & AI Specialist",
  description:
    "Software engineer building AI products that make a measurable difference. Based in London, working remotely worldwide.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="font-sans">
        {children}
        {/* Customer Support AI Widget */}
        <Script
          id="customer-support-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'http://localhost:3001/widget.js';
                script.setAttribute('data-domain', 'abdulhamid.dev');
                script.setAttribute('data-api-url', 'http://localhost:5000');
                script.async = true;
                document.body.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

