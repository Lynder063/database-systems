// next.config.js
import createMDX from "@next/mdx";
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: "/database-systems",
  assetPrefix: "/database-systems/",
  // Remove output: "export"
};

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
});

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withPWA(withMDX(nextConfig));
