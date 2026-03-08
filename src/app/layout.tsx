import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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

const fullName = `${data.personal.name.first} ${data.personal.name.last}`;
const pageTitle = `${fullName} | ${data.personal.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: data.personal.bio,
  authors: [{ name: fullName }],
  creator: fullName,
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
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    title: pageTitle,
    description: data.personal.bio,
    url: siteUrl,
    siteName: fullName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${fullName} — ${data.personal.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: data.personal.bio,
    images: ["/opengraph-image"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: fullName,
              url: siteUrl,
              image: `${siteUrl}/logo.png`,
              jobTitle: data.personal.title,
              description: data.personal.bio,
              email: `mailto:${data.personal.email}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: data.personal.location,
              },
              sameAs: data.socials.map((s: { url: string }) => s.url),
            }),
          }}
        />
      </head>
      <body className="antialiased transition-colors duration-300">
        {children}
        <SpeedInsights />
        <Analytics />
        {process.env.RINGG_AGENT_API_KEY && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function loadAgentsCdn(e,t){let n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href="https://cdn.jsdelivr.net/npm/@desivocal/agents-cdn@"+e+"/dist/style.css";var a=document.createElement("script");a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,t())}:a.onload=function(){t()},a.src="https://cdn.jsdelivr.net/npm/@desivocal/agents-cdn@"+e+"/dist/dv-agent.es.js",document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(a)}
                loadAgentsCdn("1.0.20-alpha.59", function () {
                  loadAgent({
                    agentId: "41d33635-737f-427d-994a-6f904dd4c483",
                    xApiKey: "${process.env.RINGG_AGENT_API_KEY}",
                    variables: {},
                    theme: {"primaryColor":"#18181b","primaryTextColor":"#ffffff","backgroundColor":"#ffffff","surfaceColor":"#f4f4f5","textColor":"#18181b","borderColor":"#e4e4e7","buttonStyle":"rounded","borderRadius":"20px"},
                    title: "Ali's Assistant",
                    description: "Talk to Ali's AI assistant — ask about his work, skills, or anything on this portfolio.",
                    icon: "${process.env.SITE_URL || ''}${data.personal.logoPath}",
                  });
                });
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
