import data from "@/data/portfolio.json";

export function GET() {
  const p = data.personal;
  const fullName = `${p.name.first} ${p.name.last}`;
  const siteUrl = process.env.SITE_URL || "https://localhost:3000";

  const lines: string[] = [
    `# ${fullName}`,
    "",
    `> ${p.title}. ${p.bio}`,
    "",
    "## About",
    "",
    `${fullName} is a software engineer specializing in backend systems, distributed infrastructure, and developer tooling. He has been a founding engineer at two early-stage startups, where he owned end-to-end backend architecture from day one.`,
    "",
    `${p.currentWork.text} [${p.currentWork.company}](${p.currentWork.url}). ${data.contact.message}`,
    "",
    `- Website: ${siteUrl}`,
    `- Email: ${p.email}`,
    `- Location: ${p.location}`,
    `- Resume: ${siteUrl}${p.resumePath}`,
    "",
    "## Links",
    "",
    ...data.socials.map((s) => `- ${s.label}: ${s.url}`),
    "",
    "## Skills",
    "",
    ...Object.entries(data.skills).flatMap(([category, items]) => [
      `### ${category}`,
      (items as string[]).join(", "),
      "",
    ]),
    "## Experience",
    "",
    ...data.experience.flatMap((e) => [
      `### ${e.role} (${e.tag}) — ${e.company}`,
      `${e.period} | ${e.location}`,
      "",
      ...e.points.map((pt) => `- ${pt}`),
      "",
    ]),
    "## Education",
    "",
    ...data.education.flatMap((e) => [
      `### ${e.degree} — ${e.institution}`,
      `${e.period} | ${e.location} | ${e.grade}`,
      "",
      `Coursework: ${e.coursework.join(", ")}`,
      "",
    ]),
    "## Projects",
    "",
    ...data.projects.flatMap((proj) => [
      `### ${proj.name} — ${proj.description}`,
      `Tech: ${proj.tech.join(", ")}`,
      `GitHub: ${proj.url}`,
      "",
      ...proj.points.map((pt) => `- ${pt}`),
      "",
    ]),
    "## Achievements",
    "",
    ...data.achievements.map((a) => `- ${a}`),
    "",
    "## Activities",
    "",
    ...data.activities.flatMap((a) => [
      `### ${a.title}`,
      a.description,
      ...("items" in a && a.items ? a.items.map((i) => `- ${i}`) : []),
      ...("url" in a && a.url ? [`Read more: ${a.url}`] : []),
      "",
    ]),
    "## Contact",
    "",
    data.contact.message,
    "",
    `- Email: ${p.email}`,
    `- Schedule a call: ${data.contact.calendlyUrl}`,
    "",
    "## Source Code",
    "",
    `This portfolio is open source: ${p.repoUrl}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
