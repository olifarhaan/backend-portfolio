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
    "Ali Farhan",
    "Ali Farhan portfolio",
    "Ali Farhan software engineer",
    "olifarhaan",
    "backend engineer",
    "software engineer",
    "founding engineer",
    "freelance backend engineer",
    "freelance software engineer",
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
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information" />
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
              givenName: data.personal.name.first,
              familyName: data.personal.name.last,
              alternateName: "OliFarhaan",
              url: siteUrl,
              image: `${siteUrl}${data.personal.imagePath}`,
              jobTitle: data.personal.title,
              hasOccupation: {
                "@type": "Occupation",
                name: data.personal.title,
                occupationLocation: {
                  "@type": "Country",
                  name: data.personal.nationality,
                },
              },
              worksFor: {
                "@type": "Organization",
                name: data.personal.currentWork.company,
                url: data.personal.currentWork.url,
              },
              description: data.personal.bio,
              email: `mailto:${data.personal.email}`,
              gender: data.personal.gender,
              birthDate: data.personal.birthDate,
              birthPlace: {
                "@type": "Place",
                name: data.personal.birthPlace,
              },
              nationality: {
                "@type": "Country",
                name: data.personal.nationality,
              },
              knowsLanguage: data.personal.languages,
              height: {
                "@type": "QuantitativeValue",
                value: data.personal.height,
                unitCode: "CMT",
              },
              weight: {
                "@type": "QuantitativeValue",
                value: data.personal.weight,
                unitCode: "KGM",
              },
              parent: {
                "@type": "Person",
                name: data.personal.parent,
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              workLocation: {
                "@type": "Place",
                name: data.personal.location,
              },
              alumniOf: data.education.map(
                (e: {
                  institution: string;
                  degree: string;
                  period: string;
                  location: string;
                }) => ({
                  "@type": "OrganizationRole",
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: e.institution,
                    address: e.location,
                  },
                  startDate: e.period.split(" — ")[0],
                  endDate: e.period.split(" — ")[1] || e.period,
                  roleName: e.degree,
                })
              ),
              hasCredential: data.education.map(
                (e: { degree: string; institution: string }) => ({
                  "@type": "EducationalOccupationalCredential",
                  name: e.degree,
                  credentialCategory: "degree",
                  recognizedBy: {
                    "@type": "EducationalOrganization",
                    name: e.institution,
                  },
                })
              ),
              knowsAbout: Object.values(data.skills).flat(),
              skills: Object.values(data.skills).flat(),
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
                    logoUrl: "${process.env.SITE_URL || ''}${data.personal.logoPath}",
                    buttons: {
                      modalTrigger: {
                        styles: {
                          boxShadow: "0 2px 8px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)"
                        }
                      }
                    }
                  });
                  setTimeout(function() {
                    var btn = document.querySelector('[class*="ringg_ai-h-14"]');
                    if (btn) btn.click();
                  }, 1500);
                });
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
