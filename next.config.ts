import type { NextConfig } from "next";

// 2026-10-17: /blog is served by playbook.asendify.co/api/blog?svc=morningstarr (nightly articles in Supabase).
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/blog", destination: "https://playbook.asendify.co/api/blog?svc=morningstarr" },
      { source: "/blog/:slug", destination: "https://playbook.asendify.co/api/blog?svc=morningstarr&slug=:slug" },
      { source: "/blog-sitemap.xml", destination: "https://playbook.asendify.co/api/blog?svc=morningstarr&sitemap=1" },
    ];
  },
};

export default nextConfig;
