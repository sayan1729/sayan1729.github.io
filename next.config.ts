import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // build a static export (in /out)
  images: {
    unoptimized: true,   // required for static export
  },
  // trailingSlash: true,   // optional: can help avoid 404s on static hosts
};

export default nextConfig;
