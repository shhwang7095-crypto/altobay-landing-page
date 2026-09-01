import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1120",
        }}
      >
        <svg
          viewBox="0 0 433 434"
          width={128}
          height={128}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65.6 310.5 A184.5 184.5 0 1 1 379.4 310.5"
            stroke="#3a4560"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M106.4 329.8 A136.5 136.5 0 1 1 338.6 329.8"
            stroke="#75a7f9"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <line
            x1="222.5"
            y1="396.5"
            x2="336"
            y2="250"
            stroke="#3b82f6"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <circle cx="222.5" cy="396.5" r="20" fill="#3a4560" />
          <circle cx="222.5" cy="396.5" r="10" fill="#3b82f6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
