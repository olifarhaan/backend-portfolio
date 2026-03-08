import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import data from "@/data/portfolio.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.SITE_URL || "https://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${data.personal.name.first} ${data.personal.name.last} | ${data.personal.title}`,
  description: data.personal.bio,
  keywords: [
    "backend engineer",
    "software engineer",
    "founding engineer",
    "Java",
    "Go",
    "Spring Boot",
    "Kubernetes",
    "distributed systems",
  ],
  openGraph: {
    title: `${data.personal.name.first} ${data.personal.name.last} | ${data.personal.title}`,
    description: data.personal.bio,
    url: siteUrl,
    siteName: `${data.personal.name.first} ${data.personal.name.last}`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.personal.name.first} ${data.personal.name.last} | ${data.personal.title}`,
    description: data.personal.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
