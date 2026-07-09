/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath:
    process.env.NODE_ENV === "production"
      ? "/developer-portfolio-website"
      : "",
};

export default nextConfig;
