import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/database-systems",
  assetPrefix: "/database-systems/",
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
