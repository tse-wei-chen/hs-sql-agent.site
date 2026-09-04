import type { APIRoute } from "astro";
import satori from "satori";
import sharp from "sharp";
import { fontData, experimental_getFontFileURL } from "astro:assets";
import { getFontPathByWeight } from "@/utils/getFontPathByWeight";

export const GET: APIRoute = async context => {
  const fonts = fontData["--font-google-sans-code"];
  const regularFontPath = getFontPathByWeight(fonts, 400);
  const boldFontPath = getFontPathByWeight(fonts, 700);

  if (regularFontPath === undefined || boldFontPath === undefined) {
    throw new Error("Cannot find the font path for the OG image.");
  }

  const [regularData, boldData] = await Promise.all([
    fetch(experimental_getFontFileURL(regularFontPath, context.url)).then(res => res.arrayBuffer()),
    fetch(experimental_getFontFileURL(boldFontPath, context.url)).then(res => res.arrayBuffer()),
  ]);

  const pipeline = [
    ["01", "PARSE", "#d6534d"],
    ["02", "VALIDATE", "#5798ef"],
    ["03", "PROVE", "#6fbd78"],
    ["04", "COMPILE", "#d6534d"],
  ];

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background: "linear-gradient(135deg, #171619 0%, #1e1d21 58%, #191a1d 100%)",
          color: "#f2f1f3",
          padding: "62px 72px 52px",
          fontFamily: "Google Sans Code",
        },
        children: [
          {
            type: "div",
            props: {
              style: { display: "flex", alignItems: "center", gap: "16px", fontSize: 26, fontWeight: 700 },
              children: [
                { type: "div", props: { style: { width: 22, height: 22, borderRadius: 5, border: "4px solid #d6534d", background: "#242327" } } },
                { type: "span", props: { children: "hs-sql-agent" } },
                { type: "span", props: { style: { color: "#88878e", marginLeft: "12px", fontSize: 19 }, children: "MCP · SQL COMPILER · GOVERNANCE" } },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", marginTop: "8px" },
              children: [
                { type: "div", props: { style: { fontSize: 69, lineHeight: 1.02, fontWeight: 700, letterSpacing: "-4px", maxWidth: "970px" }, children: "Secure SQL access for AI agents." } },
                { type: "div", props: { style: { marginTop: "22px", color: "#aaa9b0", fontSize: 26, lineHeight: 1.45, maxWidth: "1000px" }, children: "Fail-closed compilation, scoped policy, and human-approved DML across six SQL providers." } },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: "18px" },
              children: [
                {
                  type: "div",
                  props: {
                    style: { display: "flex", gap: "14px" },
                    children: pipeline.map(([index, label, color]) => ({
                      type: "div",
                      props: {
                        style: { width: "242px", display: "flex", alignItems: "center", gap: "14px", border: "1px solid #4a494f", borderLeft: `6px solid ${color}`, background: "#222126", padding: "15px 18px" },
                        children: [
                          { type: "span", props: { style: { color, fontSize: 16, fontWeight: 700 }, children: index } },
                          { type: "span", props: { style: { fontSize: 18, fontWeight: 700 }, children: label } },
                        ],
                      },
                    })),
                  },
                },
                { type: "div", props: { style: { color: "#929198", fontSize: 18 }, children: "PostgreSQL · MySQL · SQL Server · Oracle · SQLite · Firebird" } },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { position: "absolute", right: "-110px", top: "-100px", width: "360px", height: "360px", borderRadius: "999px", background: "#d6534d", opacity: 0.1 },
            },
          },
          {
            type: "div",
            props: {
              style: { position: "absolute", right: "100px", bottom: "-180px", width: "420px", height: "420px", borderRadius: "999px", background: "#5798ef", opacity: 0.08 },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: [
        { name: "Google Sans Code", data: regularData, weight: 400, style: "normal" },
        { name: "Google Sans Code", data: boldData, weight: 700, style: "normal" },
      ],
    }
  );

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(pngBuffer), { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" } });
};
