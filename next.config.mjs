/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Compress responses with gzip
  compress: true,

  // Remove X-Powered-By header for smaller responses
  poweredByHeader: false,
};

export default nextConfig;
