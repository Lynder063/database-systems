import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/database-systems",
  assetPrefix: "/database-systems/",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Removed output: "export"
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});
export default withMDX(nextConfig);
