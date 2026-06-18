import { ImageResponse } from "next/og";

export function defaultFaviconResponse(size: number): Response {
  const fontSize = Math.round(size * 0.62);
  const borderRadius = Math.round(size * 0.25);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4a88c4",
          borderRadius,
          color: "#ffffff",
          fontSize,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Z
      </div>
    ),
    { width: size, height: size },
  );
}
