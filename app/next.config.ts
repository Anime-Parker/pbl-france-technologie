import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 15+ Host Security By-pass
  allowedDevOrigins: [
    "http://192.168.0.14:3000",
    "http://192.168.0.14",
    "192.168.0.14:3000",
    "192.168.0.14",
    "ripe-rooms-switch.loca.lt",
    "https://ripe-rooms-switch.loca.lt"
  ],
};

export default nextConfig;
