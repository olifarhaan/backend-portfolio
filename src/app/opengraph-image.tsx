import { ImageResponse } from "next/og";
import data from "@/data/portfolio.json";

export const runtime = "edge";
export const alt = `${data.personal.name.first} ${data.personal.name.last} — ${data.personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const { personal } = data;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#010001",
          color: "#ffffff",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#737373",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
            }}
          >
            {personal.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginTop: "16px",
            }}
          >
            {`${personal.name.first} ${personal.name.last}`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#a3a3a3",
              lineHeight: 1.6,
              maxWidth: "800px",
              marginTop: "24px",
            }}
          >
            {personal.bio}
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "40px",
              fontSize: 16,
              color: "#525252",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            <span>{personal.email}</span>
            <span>·</span>
            <span>{personal.location}</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
