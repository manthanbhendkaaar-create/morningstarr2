import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// 2026-10-20 (Manthan): "let AIs pay but don't let them book a call". The consultation-call booking (/?book=1) is
// blocked for every crawler and AI agent; only the booking path is blocked, never the rest of the site.
const BOOKING_PATHS = ["/?book=", "/*?book=", "/*&book="];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: BOOKING_PATHS,
      },
      {
        // AI search and assistant crawlers: explicitly allowed
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: "/",
        disallow: BOOKING_PATHS,
      },
    ],
    sitemap: [`${SITE.url}/sitemap.xml`, `${SITE.url}/blog-sitemap.xml`],
  };
}
