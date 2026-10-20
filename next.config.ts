import type { NextConfig } from "next";

// 2026-10-17: /blog is served by playbook.asendify.co/api/blog?svc=morningstarr (nightly articles in Supabase).
// 2026-10-20: the free Automation ROI Calculator is a static page (public/automation-roi-calculator/index.html) served at
// /automation-roi-calculator/ WITH the trailing slash, like every other Asendify free tool. Next's built-in "remove the
// trailing slash" redirect is switched off and replaced by the same redirect (/:path/ -> /:path, 308) for every other path,
// so the rest of the site behaves exactly as before. (Custom routes match with or without a trailing slash, so the rewrite
// below also answers /automation-roi-calculator; the page's canonical tag points to the slash URL.)
const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      { source: "/:path((?!automation-roi-calculator/?$).+)/", destination: "/:path", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/automation-roi-calculator/", destination: "/automation-roi-calculator/index.html" },
      ],
      afterFiles: [
        { source: "/blog", destination: "https://playbook.asendify.co/api/blog?svc=morningstarr" },
        { source: "/blog/:slug", destination: "https://playbook.asendify.co/api/blog?svc=morningstarr&slug=:slug" },
        { source: "/blog-sitemap.xml", destination: "https://playbook.asendify.co/api/blog?svc=morningstarr&sitemap=1" },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
