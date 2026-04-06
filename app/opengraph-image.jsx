import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <p
          style={{
            color: "#c8f545",
            fontSize: 20,
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          aravind.is-a.dev
        </p>
        <h1
          style={{
            color: "#f0ede6",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Murugesh Aravind
        </h1>
        <p
          style={{
            color: "#6b6b6b",
            fontSize: 28,
            marginTop: 16,
          }}
        >
          Senior Frontend Engineer · 8 years · Banking &amp; Fintech
        </p>
      </div>
    ),
  );
}
