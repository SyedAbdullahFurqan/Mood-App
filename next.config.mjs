/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [
      "lh3.googleusercontent.com",      // Google profile images
      "avatars.githubusercontent.com",  // GitHub profile images
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
