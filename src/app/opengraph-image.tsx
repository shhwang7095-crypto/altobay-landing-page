import { ImageResponse } from "next/og";

export const alt = "Altobay.ai — Smart Mobility Platform for Auto Repair Shops";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #0b1120 0%, #0e1a33 45%, #1c3d8f 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg
            viewBox="0 0 433 434"
            width={110}
            height={110}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.6 310.5 A184.5 184.5 0 1 1 379.4 310.5"
              stroke="#3a4560"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M106.4 329.8 A136.5 136.5 0 1 1 338.6 329.8"
              stroke="#75a7f9"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <line
              x1="222.5"
              y1="396.5"
              x2="336"
              y2="250"
              stroke="#3b82f6"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <circle cx="222.5" cy="396.5" r="17.5" fill="#3a4560" />
            <circle cx="222.5" cy="396.5" r="9" fill="#3b82f6" />
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 76, fontWeight: 800, color: "#ffffff" }}>
              Altobay
            </span>
            <span
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: "#ffffff",
                background: "#4a8dfa",
                borderRadius: 10,
                padding: "6px 14px",
                display: "flex",
              }}
            >
              .ai
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            fontWeight: 600,
            color: "#bcd3ff",
            display: "flex",
          }}
        >
          Smart Mobility Platform for U.S. Auto Repair Shops
        </div>
      </div>
    ),
    { ...size }
  );
}
