import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Quesos El Consuelo";
  const sub =
    searchParams.get("sub") ||
    "Queso Manchego Artesanal · DOP · Madridejos, Toledo";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#231A0E",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* top rule */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(193,125,60,0.35)",
            display: "flex",
          }}
        />

        {/* brand label */}
        <div
          style={{
            display: "flex",
            fontSize: 15,
            letterSpacing: 7,
            color: "#C17D3C",
            fontFamily: "serif",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          QUESOS EL CONSUELO
        </div>

        {/* main title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 32 ? 60 : 78,
            fontFamily: "serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#F7F0E3",
            lineHeight: 1.1,
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontFamily: "serif",
            color: "rgba(247,240,227,0.5)",
            letterSpacing: 0.5,
          }}
        >
          {sub}
        </div>

        {/* bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(193,125,60,0.35)",
            display: "flex",
          }}
        />

        {/* DOP badge bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{ width: 28, height: 1, background: "#C17D3C", display: "flex" }}
          />
          <div
            style={{
              fontSize: 13,
              color: "#C17D3C",
              fontFamily: "serif",
              letterSpacing: 3,
              display: "flex",
            }}
          >
            DESDE 1938
          </div>
          <div
            style={{ width: 28, height: 1, background: "#C17D3C", display: "flex" }}
          />
        </div>

        {/* decorative circle */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: "50%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(193,125,60,0.08)",
            display: "flex",
            transform: "translateY(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -60,
            top: "50%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "1px solid rgba(193,125,60,0.06)",
            display: "flex",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
