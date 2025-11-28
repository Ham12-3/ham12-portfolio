import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Abdulhamid Sonaike",
  description: "Full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
  
{/* Customer Support AI Widget */}
{/* Add this inside your layout.js or _app.js */}


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
