import { ImageResponse } from "next/og";
import { metrics } from "./data/metrics";

// Edge runtime: no Node built-ins here (AGENTS.md §5).
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The social card carries the same palette as the site — paper, ink, and the
 * one rust accent — so a shared link does not arrive in the acid-green-on-black
 * the site stopped using. The colours are repeated literally rather than read
 * from CSS custom properties, which are not available in this runtime.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf8f3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <p
          style={{
            color: "#9a3b1e",
            fontSize: 20,
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          aravind.is-a.dev
        </p>
        <h1
          style={{
            color: "#17160f",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Murugesh Aravind
        </h1>
        <p
          style={{
            color: "#6b665c",
            fontSize: 28,
            marginTop: 16,
          }}
        >
          Senior Frontend Engineer · {metrics.yearsExperience.text} · Banking
          &amp; GenAI
        </p>
      </div>
    ),
  );
}
